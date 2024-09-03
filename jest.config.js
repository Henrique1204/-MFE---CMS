module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/*.png/'],
  setupFilesAfterEnv: ['<rootDir>/src/Tests/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.svg': '<rootDir>/src/@mocks/svgMock.js',
  },
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'jest.tsconfig.json',
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.test.tsx',
    '!src/**/*styled.tsx',
    '!src/**/*styled.ts',
  ],
  coverageReporters: ['lcov', 'json'],
  moduleNameMapper: {
    '^@Mocks(.*)$': '<rootDir>/src/@mocks/$1',
    '^@Types(.*)$': '<rootDir>/src/@types/$1',
    '^@Components(.*)$': '<rootDir>/src/components/$1',
    '^@Assets(.*)$': '<rootDir>/src/core/assets/$1',
    '^@Utils(.*)$': '<rootDir>/src/core/utils/$1',
    '^@Constants(.*)$': '<rootDir>/src/core/constants/$1',
    '^@Tests(.*)$': '<rootDir>/src/tests/$1',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
