/** @type {import('jest').Config} */
const jestConfig = {
  globalSetup: "./test/globalSetup.ts",
  globalTeardown: "./test/globalTeardown.ts",
  setupFiles: ["./test/setupFiles.ts"],
  setupFilesAfterEnv: ["./test/setupFilesAfterEnv.ts"],
};

module.exports = jestConfig;
