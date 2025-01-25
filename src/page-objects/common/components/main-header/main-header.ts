import { BaseComponent } from "../base-component";
import { BurgerMenu } from "./burger-menu";


/**
 * Main header.
 */
export class MainHeader extends BaseComponent {
  private readonly parentSelector = '//div[@class="primary_header"]';

  /* Components */
  private readonly burgerMenu = new BurgerMenu(this.page);

  /* Elements */
  private readonly appLogo = this.page.locator(`${this.parentSelector}//div[@class="app_logo"]`);
  private readonly cartLink = this.page.locator(`${this.parentSelector}//a[@class="shopping_cart_link"]`);

  /**
   * Нажать кнопку корзины
   */
  public async clickCartLink() {
    await this.cartLink.click();
  }
}
