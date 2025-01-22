import { MainHeader } from "../../common/components/main-header";
import { BasePage } from "../../common/pages/base-page";


export class CartPage extends BasePage {
  protected readonly url = '/cart.html';

  private readonly header = new MainHeader(this.page);
}
