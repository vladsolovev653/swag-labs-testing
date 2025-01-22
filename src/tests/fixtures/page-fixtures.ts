import { test as base } from '@playwright/test';
import { LoginPage } from "../../page-objects/login/pages/login-page";


interface PageFixtures {
  loginPage: LoginPage,
}

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
