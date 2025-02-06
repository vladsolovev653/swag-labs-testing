import test from "@playwright/test";
import { User } from "../../../types/data/user";
import { BasePage } from "../../common/pages/base-page";
import { InventoryPage } from '../../inventory/pages/inventory-page';
import { Input } from "../../common/elements/input";
import { Button } from "../../common/elements/button";
import { PageFactory } from "../../../utils/page-factory";
import { PageEnum } from "../../../enums/page-enum";


/**
 * Login page.
 */
export class LoginPage extends BasePage {
  protected readonly url = '/';
  protected readonly name = 'Login page';


  /* Locators */
  private readonly usernameInput = new Input({ page: this.page, selector: '#user-name', name: 'Username' });
  private readonly passwordInput = new Input({ page: this.page, selector: '#password', name: 'Password' });
  private readonly loginBtn = new Button({ page: this.page, selector: '#login-button', name: 'Login' });


  /**
   * User login.
   * @param user User data.
   * @returns Inventory page.
   */
  public async login(user: User): Promise<InventoryPage> {
    await test.step(`Login with user "${user.username}"`, async () => {
      await this.usernameInput.fillPrivate(user.username);
      await this.passwordInput.fillPrivate(user.password);
      await this.loginBtn.click();
    });

    const inventoryPage = PageFactory.getPage<InventoryPage>(PageEnum.InventoryPage, this.page);
    await inventoryPage.shouldBeLoaded();
    return inventoryPage;
  }
}
