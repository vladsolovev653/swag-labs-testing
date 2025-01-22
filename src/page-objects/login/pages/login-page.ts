import test from "@playwright/test";
import { User } from "../../../types/user";
import { BasePage } from "../../common/pages/base-page";
import { InventoryPage } from '../../inventory/pages/inventory-page';


export class LoginPage extends BasePage {
  protected readonly url = '/';

  /* Locators */
  private readonly usernameInput = this.page.locator('#user-name');
  private readonly passwordInput = this.page.locator('#password');
  private readonly loginBtn = this.page.locator('#login-button');

  public async login(user: User): Promise<InventoryPage> {
    await test.step(`Login as "${user.username}"`, async () => {
      await this.usernameInput.fill(user.username);
      await this.passwordInput.fill(user.password);
      await this.loginBtn.click();
    });

    return new InventoryPage(this.page);
  }
}
