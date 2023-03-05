export default {
  displayName: {
    name: "core",
    color: "blue",
  },
  clearMocks: true,
  coverageDirectory: "../__coverage",
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  rootDir: "src",
  testRegex: ".*\\..*spec\\.ts$",
  transform: {
    "^.+\\.ts?$": ["@swc/jest"],
  },
};
