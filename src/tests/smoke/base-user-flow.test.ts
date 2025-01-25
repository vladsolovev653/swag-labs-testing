import { test } from '../fixtures/fixtures';


test('Base user flow', async ({ 
  // Pages
  loginPage, 
  
  // Data
  standardUser,
  backpack
}) => {
  await loginPage.open();
  const inventoryPage = await loginPage.login(standardUser);
  await inventoryPage.addItemToCart(backpack);
  await inventoryPage.cartBadgeShouldHaveCount('1');
});
