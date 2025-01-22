import test from "@playwright/test";
import { MainHeader } from "../../common/components/main-header/main-header";
import { BasePage } from "../../common/pages/base-page";
import { CartPage } from "../../cart/pages/cart-page";


export class InventoryPage extends BasePage {
  protected readonly url = '/inventory.html';

  /* Components */
  private readonly header = new MainHeader(this.page);


  /**
   * Переход в корзину.
   * @returns Корзина.
   */
  public async openCartPage(): Promise<CartPage> {
    await test.step(`Перейти в корзину`, async () => {
      await this.header.clickOnCartLink();      
    });

    return new CartPage(this.page);
  }
}
