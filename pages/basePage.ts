import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async waitForPageTitle(title: string) {
    // await expect(this.page.locator(".title")).toHaveText(title);
  
    const locator = this.page.locator('.title');

    // Wait until the element is attached + visible
    await locator.waitFor({ state: 'visible' });

    // Now assert the expected text
    await expect(locator).toHaveText(title, { timeout: 5000 });
  }
}
