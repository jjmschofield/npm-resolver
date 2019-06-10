const { NpmClient } = require('./__mocks__/NpmClient');
const { Package } = require('../models/Package');
const underTest = require('./Resolver');

describe('src/routes/resolve/Resolver.js', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Resolver', () => {
    describe('constructor', () => {
      it('should add the provided npm client as a member property when called', () => {
        // Arrange
        const expected = new NpmClient({ registry: 'some-reg' });

        // Act
        const result = new underTest.Resolver({ client: expected });

        // Assert
        expect(result.client).toBe(expected);
      });

      it('should create an empty packages map when called', () => {
        // Arrange
        const expected = new Map();

        // Act
        const result = new underTest.Resolver();

        // Assert
        expect(result.packages).toEqual(expected);
      });

      it('should create an empty queue set when called', () => {
        // Arrange
        const expected = new Set();

        // Act
        const result = new underTest.Resolver();

        // Assert
        expect(result.queue).toEqual(expected);
      });
    });

    describe('resolve', () => {
      let clientMock;

      beforeEach(() => {
        clientMock = new NpmClient({ registry: 'some-reg' });
      });

      describe('when the source package can be retrieved form the registry', () => {
        it('should resolve the source package', async () => {
          // Arrange
          const resolver = new underTest.Resolver({ client: clientMock });

          const expected = new Package({
            name: 'some name',
            version: '1.0.0',
          });

          clientMock.getPackage.mockResolvedValue(expected);

          // Act
          const result = await resolver.resolve(expected.name, expected.version);

          // Assert
          expect(result.get(expected.id)).toBe(expected);
          expect(clientMock.getPackage).toHaveBeenCalledWith(expected.name, expected.version);
        });

        it('should add the dependencies of the source package to the queue', async () => {
          // Arrange
          const resolver = new underTest.Resolver({ client: clientMock });
          resolver.addToQueue = jest.fn();

          const expected = new Package({
            name: 'some name',
            version: '1.0.0',
            dependencyIds: [
              'some-pkg#1.2.3',
            ],
          });

          clientMock.getPackage.mockResolvedValue(expected);

          // Act
          await resolver.resolve(expected.name, expected.version);

          // Assert
          expect(resolver.addToQueue).toHaveBeenCalledWith(expected.dependencies);
        });

        it('should start the queue processing', async () => {
          // Arrange
          const resolver = new underTest.Resolver({ client: clientMock });
          resolver.processQueue = jest.fn();

          const expected = new Package({
            name: 'some name',
            version: '1.0.0',
            dependencyIds: [
              'some-pkg#1.2.3',
            ],
          });

          clientMock.getPackage.mockResolvedValue(expected);

          // Act
          await resolver.resolve(expected.name, expected.version);

          // Assert
          expect(resolver.processQueue).toHaveBeenCalled();
        });

        describe('when resolution completes successfully', () => {
          it('should return the package map', async () => {
            // Arrange
            const resolver = new underTest.Resolver({ client: clientMock });

            const expected = new Package({
              name: 'some name',
              version: '1.0.0',
            });

            clientMock.getPackage.mockResolvedValue(expected);

            // Act
            const result = await resolver.resolve(expected.name, expected.version);

            // Assert
            expect(result).toBe(resolver.packages);
          });
        });

        describe('when resolution throws an error', () => {
          it('should throw the error', async () => {
            // Arrange
            const expected = new Error('some error');
            const resolver = new underTest.Resolver({ client: clientMock });
            resolver.processQueue = jest.fn().mockRejectedValue(expected);

            const fake = new Package({
              name: 'some name',
              version: '1.0.0',
              dependencyIds: [
                'some-pkg#1.2.3',
              ],
            });

            clientMock.getPackage.mockResolvedValue(fake);

            // Act
            await expect(resolver.resolve(fake.name, fake.version)).rejects.toBe(expected);
          });
        });
      });

      describe('when the source package cannot be retrieved form the registry', () => {
        it('should throw an error', async () => {
          // Arrange
          const resolver = new underTest.Resolver({ client: clientMock });

          const fake = new Package({
            name: 'some name',
            version: '1.0.0',
          });

          const expected = new Error('some error');

          clientMock.getPackage.mockRejectedValue(expected);

          // Assert
          await expect(resolver.resolve(fake.name, fake.version)).rejects.toBe(expected);
        });
      });
    });

    describe('processQueue', () => {
      it('should pass all items in the queue to the batch processor', async () => {
        // Arrange
        const resolver = new underTest.Resolver();

        const expected = [
          'pkg-1#1.0.0',
          'pkg-2#1.0.0',
          'pkg-3#1.0.0',
        ];

        expected.forEach((id) => {
          resolver.queue.add(id);
        });

        resolver.batchProcessor = jest.fn().mockImplementation(async () => {
          resolver.queue.clear();
        });

        // Act
        await resolver.processQueue();

        // Assert
        expect(resolver.batchProcessor).toHaveBeenCalledWith(expected);
      });

      it('should continue processing items until the queue is empty', async () => {
        // Arrange
        const resolver = new underTest.Resolver();

        resolver.queue.add('pkg-1#1.0.0');
        resolver.queue.add('pkg-2#1.0.0');
        resolver.queue.add('pkg-3#1.0.0');

        resolver.batchProcessor = jest.fn()
          .mockImplementationOnce(async () => {
            resolver.queue.clear();
            resolver.queue.add('pkg-4#1.0.0');
          })
          .mockImplementationOnce(async () => {
            resolver.queue.clear();
          });

        // Act
        await resolver.processQueue();

        // Assert
        expect(resolver.batchProcessor).toHaveBeenCalledTimes(2);
      });
    });

    describe('batchProcessor', () => {
      let clientMock;

      beforeEach(() => {
        clientMock = new NpmClient({ registry: 'some-reg' });
      });

      it('should request details for each provided package from the client', async () => {
        // Arrange
        const resolver = new underTest.Resolver({ client: clientMock });

        const expected = new Package({
          name: 'some name',
          version: '1.0.0',
        });

        const batchFake = [
          expected.id,
        ];

        clientMock.getPackage.mockResolvedValue(expected);

        // Act
        await resolver.batchProcessor(batchFake);

        // Assert
        expect(clientMock.getPackage).toHaveBeenCalledWith(expected.name, expected.version);
      });

      it('should add each retrieved package to the package map', async () => {
        // Arrange
        const resolver = new underTest.Resolver({ client: clientMock });

        const expected = new Package({
          name: 'some name',
          version: '1.0.0',
        });

        const batchFake = [
          expected.id,
        ];

        clientMock.getPackage.mockResolvedValue(expected);

        // Act
        await resolver.batchProcessor(batchFake);

        // Assert
        expect(resolver.packages.get(expected.id)).toEqual(expected);
      });

      it('should add the dependencies from retrieved packages to the processing queue', async () => {
        // Arrange
        const resolver = new underTest.Resolver({ client: clientMock });

        const expected = new Package({
          name: 'some name',
          version: '1.0.0',
          dependencies: [
            'some-other-name#1.2.3',
          ],
        });

        const batchFake = [
          expected.id,
        ];

        clientMock.getPackage.mockResolvedValue(expected);
        resolver.addToQueue = jest.fn();

        // Act
        await resolver.batchProcessor(batchFake);

        // Assert
        expect(resolver.addToQueue).toHaveBeenCalledWith([expected.dependencies[0]]);
      });

      it('should remove ids from the queue', async () => {
        // Arrange
        const resolver = new underTest.Resolver({ client: clientMock });

        const expected = new Package({
          name: 'some name',
          version: '1.0.0',
          dependencyIds: [
            'some-other-name#1.2.3',
          ],
        });

        resolver.queue.add(expected.id);

        const batchFake = [
          expected.id,
        ];

        clientMock.getPackage.mockResolvedValue(expected);

        // Act
        await resolver.batchProcessor(batchFake);

        // Assert
        expect(resolver.queue.has(expected.id)).toBeFalsy();
      });
    });

    describe('addToQueue', () => {
      it('should add dependencies to the queue when they are not in the queue or package map', () => {
        // Arrange
        const resolver = new underTest.Resolver();

        const expected = [
          'some-id',
          'some-other-id',
        ];

        // Act
        resolver.addToQueue(expected);

        // Assert
        expect(resolver.queue.has(expected[0])).toBeTruthy();
        expect(resolver.queue.has(expected[1])).toBeTruthy();
      });

      it('should not add a dependency which is already in the queue', () => {
        // Arrange
        const resolver = new underTest.Resolver();
        resolver.queue.add('some-id');
        resolver.queue.add('some-other-id');

        const notExpected = [
          'some-id',
        ];

        // Act
        resolver.addToQueue(notExpected);


        // Assert
        expect(resolver.queue.size).toEqual(2);
      });

      it('should not add a dpendency which is already in the packages map', () => {
        // Arrange
        const resolver = new underTest.Resolver();

        const notExpected = new Package({ name: 'some-name', version: '1.2.3' });

        resolver.packages.set(notExpected.id, notExpected);

        // Act
        resolver.addToQueue([notExpected.id]);

        // Assert
        expect(resolver.queue.has(notExpected.id)).toBeFalsy();
        expect(resolver.queue.size).toEqual(0);
      });
    });
  });
});
