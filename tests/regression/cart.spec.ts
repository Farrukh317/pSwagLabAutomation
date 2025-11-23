import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { ProductsPage } from "../../pages/productsPage";
import { CartPage } from "../../pages/cartPage";

test.describe("Regression Suite - Cart Behavior", () => {
  test("Add and remove items in cart", async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await login.navigate("https://www.saucedemo.com/");
    await login.login("standard_user", "secret_sauce");

    await products.addItemToCartByIndex(0);
    await products.addItemToCartByIndex(1);
    await products.goToCart();

    await cart.assertOnCartPage();
    await cart.removeItemByIndex(0);

    const remainingItems = await cart.removeButtons.count();
    expect(remainingItems).toBe(1);
  });
});
