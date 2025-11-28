import { BasePage } from "./basePage";

export class ProductsPage extends BasePage {
  async assertOnProductsPage() {
    await this.waitForPageTitle(".title", "Products");
  }
}
