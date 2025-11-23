import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CartPage extends BasePage {
  readonly pageTitle = this.page.locator(".title");
  readonly checkoutBtn = this.page.locator("[data-test='checkout']");
  readonly removeButtons = this.page.locator("button[data-test*='remove']");

  constructor(page: Page) {
    super(page);
  }

  async assertOnCartPage() {
    await this.waitForPageTitle("Your Cart");
  }

  async removeItemByIndex(index: number) {
    await this.removeButtons.nth(index).click();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}
