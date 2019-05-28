const underTest = require('./Package');

describe('src/routes/resolve/models/Package.js', () => {
  describe('Package', () => {
    describe('constructor', () => {
      it('should assign the provided values as member properties', () => {
        // Arrange
        const expected = {
          name: 'some-name',
          version: '1.0.0',
          dependencies: ['some-name-2@2.0.0'],
        };

        // Act
        const result = new underTest.Package(expected);

        // Assert
        expect(result.name).toEqual(expected.name);
        expect(result.version).toEqual(expected.version);
        expect(result.dependencies).toBe(expected.dependencies);
      });

      it('should resolve an ID for the provided package', () => {
        // Arrange
        const fake = {
          name: 'some-name',
          version: '1.0.0',
        };

        const expectedId = underTest.resolvePackageId(fake.name, fake.version);

        // Act
        const result = new underTest.Package(fake);

        // Assert
        expect(result.id).toEqual(expectedId);
      });

      it('should initialize and empty array for dependencies when they are not provided', () => {
        // Arrange
        const fake = {
          name: 'some-name',
          version: '1.0.0',
        };

        const expectedDependencies = [];

        // Act
        const result = new underTest.Package(fake);

        // Assert
        expect(result.dependencies).toEqual(expectedDependencies);
      });
    });

    describe('FromNpmResponse', () => {
      it('should assign the name and version from the response', () => {
        // Arrange
        const expected = {
          name: 'some-name',
          version: '1.0.0',
        };

        // Act
        const result = underTest.Package.FromNpmResponse(expected);

        // Assert
        expect(result.name).toEqual(expected.name);
        expect(result.version).toEqual(expected.version);
      });
    });
  });
  describe('resolvePackageId', () => {
    it('should calculate a package id when given a package name and version', () => {
      // Arrange
      const fake = {
        name: 'some-name',
        version: '1.0.0',
      };

      const expectedId = `${fake.name}#${fake.version}`;

      // Act
      const result = underTest.resolvePackageId(fake.name, fake.version);

      // Assert
      expect(result).toEqual(expectedId);
    });
  });
  describe('resolvePackage', () => {
    it('should calculate a package id when given a package name and version', () => {
      // Arrange
      const expected = {
        name: 'some-name',
        version: '1.0.0',
      };

      const fake = `${expected.name}#${expected.version}`;

      // Act
      const result = underTest.resolvePackage(fake);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
