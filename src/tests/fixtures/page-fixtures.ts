import { test as base } from '@playwright/test';
import { PageFactory } from '../../utils/page-factory';
import { PageEnum } from '../../enums/page-enum';
import { LoginPage } from '../../page-objects/login/pages/login-page';
import { InventoryPage } from '../../page-objects/inventory/pages/inventory-page';


interface PageFixtures {
  loginPage: LoginPage,
  inventoryPage: InventoryPage,
}

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(PageFactory.getPage<LoginPage>(PageEnum.LoginPage, page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(PageFactory.getPage<InventoryPage>(PageEnum.InventoryPage, page));
  },
});
