module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@api(.*)$": "<rootDir>/src/api$1",
    "^@core(.*)$": "<rootDir>/src/core$1",
    "^@layout(.*)$": "<rootDir>/src/layout$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
  },
};