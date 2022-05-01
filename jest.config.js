module.exports = {
  roots: ['<rootDir>/__tests__/'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.([t|j]s(x)?)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  // coverageDirectory: './__tests__/__coverage__/',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 80,
      lines: 80,
      functions: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: [
    '.*setup.*', // ignore anything with setup in its name
    '.*/__coverage__/.*', // ignore anything in the coverage folder
  ],
  // Setup Enzyme
  setupFiles: ['<rootDir>/__tests__/setupEnzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
