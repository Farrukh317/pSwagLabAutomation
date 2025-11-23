import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { ProductsPage } from "../../pages/productsPage";

test.describe("Smoke Suite - Product Checks", () => {
  test("Open a product details page", async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.navigate("https://www.saucedemo.com/");
    await login.login("standard_user", "secret_sauce");

    await products.assertOnProductsPage();
    await products.openItem("Sauce Labs Backpack");

    await expect(page.locator(".inventory_details_name")).toHaveText("Sauce Labs Backpack");
  });
});
