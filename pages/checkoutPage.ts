import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CheckoutPage extends BasePage {
  readonly firstName = this.page.locator("[data-test='firstName']");
  readonly lastName = this.page.locator("[data-test='lastName']");
  readonly postalCode = this.page.locator("[data-test='postalCode']");
  readonly continueBtn = this.page.locator("[data-test='continue']");
  readonly finishBtn = this.page.locator("[data-test='finish']");
  readonly successMsg = this.page.locator(".complete-header");
  readonly errorMsg = this.page.locator("[data-test='error']");

  constructor(page: Page) {
    super(page);
  }

  async fillCheckoutForm(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }

  async assertOrderSuccess() {
    await expect(this.successMsg).toHaveText("Thank you for your order!");
  }

  async assertError(message: string) {
    await expect(this.errorMsg).toContainText(message);
  }
}
