import test from "@playwright/test";
import { LoginPage } from "../page-objects/login/pages/login-page";
import { UserData } from "../interfaces/data/user-data";


test('Авторизации валидным пользователем', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminUserData: UserData = {
    username: 'standard_user',
    password: 'secret_sauce'
  };

  await loginPage.open();
  await loginPage.login(adminUserData);
});
