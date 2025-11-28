import { chromium } from "@playwright/test";
import env from "../../config";

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(env.baseURL);
  await page.fill("#user-name", env.username);
  await page.fill("#password", env.password);
  await page.click("#login-button");

  // WAIT for login to complete
  await page.waitForURL("**/inventory.html");
  await page.waitForSelector(".title");

  // Save logged-in state
  await page.context().storageState({
    path: "storageState/auth.json",
  });

  await browser.close();
}

export default globalSetup;
