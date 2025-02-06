import test from "@playwright/test";
import { PageEnum } from "../../../../enums/page-enum";
import { PageFactory } from "../../../../utils/page-factory";
import { CartPage } from "../../../cart/pages/cart-page";
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
   * Перейти в корзину.
   * @returns Страницу корзины.
   */
  public async clickCartLink(): Promise<CartPage> {
    await test.step(`Open Cart Page`, async () => {
      await this.cartLink.click();      
    });

    const cartPage = PageFactory.getPage<CartPage>(PageEnum.CartPage, this.page);
    await cartPage.shouldBeLoaded();
    return cartPage;
  }
}
