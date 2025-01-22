import { MainHeader } from "../../common/components/main-header";
import { BasePage } from "../../common/pages/base-page";


export class InventoryPage extends BasePage {
  protected readonly url = '/inventory.html';

  public readonly header = new MainHeader(this.page);
}
