import test, { Page } from "@playwright/test";
import { BasePage } from "../../common/pages/base-page";
import { Input } from "../../common/elements/input";
import { Button } from "../../common/elements/button";
import { UserData } from "../../../interfaces/data/user-data";
import { InventoryPage } from "../../inventory/pages/inventory-page";


/**
 * Страница авторизации.
 */
export class LoginPage extends BasePage {
  protected readonly name = 'Страница авторизации';
  protected readonly url = '/';

  /* Локаторы */

  private readonly usernameInput = new Input({ page: this.page, selector: '#user-name', name: 'Username' });
  private readonly passwordInput = new Input({ page: this.page, selector: '#password', name: 'Password' });
  private readonly loginBtn = new Button({ page: this.page, selector: '#login-button', name: 'Login' });

  constructor(page: Page) {
    super(page);
  }


  /**
   * Авторизация пользователем.
   * @param userData Данные пользователя.
   */
  public async login(userData: UserData): Promise<InventoryPage> {
    await test.step(`Авторизоваться пользователем "${userData.username}"`, async () => {
      await this.usernameInput.fillPrivate(userData.username);
      await this.passwordInput.fillPrivate(userData.password);
      await this.loginBtn.click();
    });

    const inventoryPage = new InventoryPage(this.page);
    await inventoryPage.shouldHaveValidUrl();
    return inventoryPage;
  }
}
