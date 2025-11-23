import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator("#user-name");
  readonly passwordInput = this.page.locator("#password");
  readonly loginBtn = this.page.locator("#login-button");
  readonly errorMsg = this.page.locator("[data-test='error']");

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async assertLoginError(message: string) {
    await expect(this.errorMsg).toContainText(message);
  }
}
