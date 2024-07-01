export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@src/(.*)': '<rootDir>/src/$1',
      // '^@components/(.*)': '<rootDir>/src/components/$1',
      '^components(.*)$': '<rootDir>/src/components$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  };
  