import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductsPage extends BasePage {
  readonly productTitle = this.page.locator(".title");
  readonly addToCartBtn = (itemName: string) =>
    this.page.locator(`text=Add to cart`, { hasText: itemName });
  readonly cartIcon = this.page.locator(".shopping_cart_link");
  readonly itemByName = (itemName: string) =>
    this.page.locator(".inventory_item_name", { hasText: itemName });
  readonly sortDropdown = this.page.locator("[data-test='product_sort_container']");

  constructor(page: Page) {
    super(page);
  }

  async assertOnProductsPage() {
    await this.waitForPageTitle("Products");
  }

  async addItemToCartByIndex(index: number) {
    await this.page.locator(".inventory_item button").nth(index).click();
  }

  async openItem(itemName: string) {
    await this.itemByName(itemName).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
