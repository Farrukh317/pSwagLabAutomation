import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async waitForPageTitle(title: string) {
    await expect(this.page.locator(".title")).toHaveText(title);
  }
}
