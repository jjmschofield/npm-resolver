const axios = require('axios');
const underTest = require('./NpmClient');
const { Package, resolvePackageId } = require('../models/Package');

jest.mock('axios');

describe('src/routes/resolve/lib/NpmClient.js', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('constructor', () => {
    it('should assign the provided values as member properties', () => {
      // Arrange
      const expected = {
        registry: 'some registry',
      };

      // Act
      const result = new underTest.NpmClient(expected);

      // Assert
      expect(result.registry).toEqual(expected.registry);
    });

    it('should assign the npm public registry by default when no registry is provided', () => {
      // Arrange
      const expected = 'https://registry.npmjs.org';

      // Act
      const result = new underTest.NpmClient({});

      // Assert
      expect(result.registry).toEqual(expected);
    });
  });

  describe('getPackage', () => {
    describe('given a package name and version', () => {
      describe('when the request is successful', () => {
        it('should return a package constructed from the response', async () => {
          // Arrange
          const fake = {
            name: 'some-package',
            version: '1.0.0',
          };

          const expected = new Package(fake);

          axios.get.mockResolvedValue({ data: fake });

          // Act
          const client = new underTest.NpmClient({});
          const result = await client.getPackage(fake.name, fake.version);

          // Assert
          expect(axios.get).toHaveBeenCalledWith(`${client.registry}/${fake.name}/${fake.version}`);
          expect(result).toEqual(expected);
        });

        it('should resolve the correct versions for dependencies', async () => {
          // Arrange
          const expected = { name: 'some-dep', version: '1.0.0' };

          const fake = {
            name: 'some-package',
            version: '1.0.0',
            dependencies: {
              'some-dep': '~1.0.0',
            },
          };

          axios.get.mockResolvedValue({ data: fake });

          const client = new underTest.NpmClient({});
          client.resolveVersion = jest.fn().mockResolvedValue(expected);


          // Act
          const result = await client.getPackage(fake.name, fake.version);

          // Assert
          expect(client.resolveVersion).toHaveBeenCalledWith('some-dep', '~1.0.0');
          expect(result.dependencies[0]).toEqual(resolvePackageId(expected.name, expected.version));
        });
      });

      describe('when the request is not successful', () => {
        it('should throw an error', async () => {
          // Arrange
          const fake = {
            name: 'some-package',
            version: '1.0.0',
          };

          const expected = new Error({ response: {} });

          axios.get.mockRejectedValue(expected);

          // Act
          const client = new underTest.NpmClient({});

          // Assert
          await expect(client.getPackage(fake.name, fake.version)).rejects.toBe(expected);
          expect(axios.get).toHaveBeenCalledWith(`${client.registry}/${fake.name}/${fake.version}`);
        });
      });
    });
  });

  describe('resolveVersion', () => {
    xit('should have tests', () => {
      fail();
    });
  });

  describe('cachedRequest', () => {
    xit('should have tests', () => {
      fail();
    });
  });
});
