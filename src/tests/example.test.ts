import test from "@playwright/test";
import { LoginPage } from "../page-objects/login/pages/login-page";
import { User } from "../types/user";


test('Example test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const standardUser: User = {
    username: process.env.STANDARD_USER_USERNAME as string,
    password: process.env.STANDARD_USER_PASSWORD as string
  };

  await loginPage.open();
  const inventoryPage = await loginPage.login(standardUser);
  const cartPage = await inventoryPage.header.clickOnCart();
});
