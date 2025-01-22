import { BaseComponent } from "../base-component";
import { BurgerMenu } from "./burger-menu";


/**
 * Основной хедер.
 */
export class MainHeader extends BaseComponent {
  private readonly parentSelector = '//div[@class="primary_header"]';
  private readonly burgerMenu = new BurgerMenu(this.page);

  /* Локаторы */
  private readonly appLogo = this.page.locator(`${this.parentSelector}//div[@class="app_logo"]`);
  private readonly cartLink = this.page.locator(`${this.parentSelector}//a[@class="shopping_cart_link"]`);
  private readonly burgerMenuBtn = this.page.locator(`${this.parentSelector}//button[@id="react-burger-menu-btn"]`);


  /**
   * Нажать кнопку корзины
   */
  public async clickOnCartLink() {
    await this.cartLink.click();
  }
}
