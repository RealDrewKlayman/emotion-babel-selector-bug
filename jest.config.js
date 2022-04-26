module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverage: false,
  coverageReporters: ["html"],
  testEnvironment: "jsdom",
  setupFiles: ["jest-localstorage-mock"],
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
  },

  moduleDirectories: ["node_modules", __dirname],
  verbose: true,
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
};
