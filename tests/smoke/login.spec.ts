import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { ProductsPage } from "../../pages/productsPage";

test.describe("Smoke Suite - Basic Access", () => {
  test("User should login successfully", async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.navigate("https://www.saucedemo.com/");
    await login.login("standard_user", "secret_sauce");
    await products.assertOnProductsPage();
  });
});
