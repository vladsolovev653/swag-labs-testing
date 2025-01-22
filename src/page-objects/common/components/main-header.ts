import { BaseComponent } from "./base-component";
import { CartPage } from "../../cart/pages/cart-page";


export class MainHeader extends BaseComponent {
  private readonly parentSelector = '//div[@class="primary_header"]';

  /* Locators */
  private readonly appLogo = this.page.locator(`${this.parentSelector}//div[@class="app_logo"]`);
  private readonly cartLink = this.page.locator(`${this.parentSelector}//a[@class="shopping_cart_link"]`);
  private readonly burgerMenuBtn = this.page.locator(`${this.parentSelector}//button[@id="react-burger-menu-btn"]`);

  public async clickOnCart(): Promise<CartPage> {
    await this.cartLink.click();

    return new CartPage(this.page);
  }
}
