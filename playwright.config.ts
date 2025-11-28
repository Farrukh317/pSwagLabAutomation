import { defineConfig } from "@playwright/test";
import env from "./config";

export default defineConfig({
  testDir: "./tests",

  // storage state generator
  globalSetup: "./tests/setup/storage.setup.ts",

  use: {
    baseURL: env.baseURL,
    storageState: "storageState/auth.json",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  projects: [
    { name: "smoke", testDir: "./tests/smoke" },
    { name: "regression", testDir: "./tests/regression", dependencies: ["smoke"] },
  ],
});
