import { test as base } from '@playwright/test';
import { PageFactory } from '../../utils/page-factory';
import { PageEnum } from '../../enums/page-enum';
import { LoginPage } from '../../page-objects/login/pages/login-page';
import { InventoryPage } from '../../page-objects/inventory/pages/inventory-page';
import { CartPage } from '../../page-objects/cart/pages/cart-page';


export const test = base.extend<{ forEachTest: void }>({
  forEachTest: [async ({}, use) => {
    PageFactory.setPage(PageEnum.LoginPage, LoginPage);
    PageFactory.setPage(PageEnum.InventoryPage, InventoryPage);
    PageFactory.setPage(PageEnum.CartPage, CartPage);
    await use();
  }, { auto: true }],
});
