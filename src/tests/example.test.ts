import { test } from './fixtures/fixtures';


test('Example test', async ({ loginPage, standardUser }) => {
  await loginPage.open();
  const inventoryPage = await loginPage.login(standardUser);
  await inventoryPage.openCartPage();
});
