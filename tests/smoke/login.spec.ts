import { test } from "@playwright/test";
import { ProductsPage } from "../../pages/productsPage";

test.describe("Smoke Suite - Basic Access", () => {
  test("User should login successfully (using storage state)", async ({ page }) => {
    const products = new ProductsPage(page);

    await page.goto("/inventory.html");
    await products.assertOnProductsPage();
  });
});
