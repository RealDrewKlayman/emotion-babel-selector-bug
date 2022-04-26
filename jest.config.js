module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  collectCoverage: true,
  coverageReporters: ["html", "text", "cobertura", "lcov"],
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!src/index.ts",
  ],
  testEnvironment: "jsdom",
  setupFiles: ["jest-localstorage-mock"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.prn$": "<rootDir>/test/fileMock.js",
    "^src(.*)$": "<rootDir>/src$1",
  },

  moduleDirectories: ["node_modules", "test-utils", __dirname],
  verbose: true,
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
};
