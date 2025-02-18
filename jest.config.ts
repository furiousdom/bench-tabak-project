import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  collectCoverage: true,
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  roots: [
    "<rootDir>/tests"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
};

export default config;
