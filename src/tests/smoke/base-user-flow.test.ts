import { test } from '../fixtures/fixtures';


test('Base user flow', async ({ 
  loginPage,
  standardUser
}) => {
  await loginPage.open();
  const inventoryPage = await loginPage.login(standardUser);
  await inventoryPage.header.clickCartLink();
});
