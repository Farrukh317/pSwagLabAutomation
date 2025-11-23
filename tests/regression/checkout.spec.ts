import { test } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { ProductsPage } from "../../pages/productsPage";
import { CartPage } from "../../pages/cartPage";
import { CheckoutPage } from "../../pages/checkoutPage";

test.describe("Regression Suite - Checkout Flow", () => {
  test("Complete checkout successfully", async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.navigate("https://www.saucedemo.com/");
    await login.login("standard_user", "secret_sauce");

    await products.assertOnProductsPage();
    await products.addItemToCartByIndex(0);
    await products.goToCart();

    await cart.assertOnCartPage();
    await cart.proceedToCheckout();

    await checkout.fillCheckoutForm("John", "Doe", "44000");
    await checkout.finishOrder();
    await checkout.assertOrderSuccess();
  });
});
