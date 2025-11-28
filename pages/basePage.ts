import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  constructor(public page: Page) {}

  async waitForPageTitle(selector: string, expected: string) {
    const title: Locator = this.page.locator(selector);

    await title.waitFor({ state: "visible" });
    await expect(title).toHaveText(expected);
  }
}
