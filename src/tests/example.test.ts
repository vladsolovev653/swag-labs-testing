import test from "@playwright/test";
import { LoginPage } from "../page-objects/login/pages/login-page";
import { UserData } from "../interfaces/data/user-data";
import { InventoryItemData } from "../interfaces/data/inventory-item-data";


test('Авторизации валидным пользователем', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  const adminUserData: UserData = {
    username: 'standard_user',
    password: 'secret_sauce'
  };

  const itemData: InventoryItemData = {
    id: '4',
    name: 'Sauce Labs Backpack',
    description: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    price: '$29.99'
  };

  await loginPage.open();
  const inventoryPage = await loginPage.login(adminUserData);
  await inventoryPage.addItemToCart(itemData);
});
