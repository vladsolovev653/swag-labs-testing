import test from "@playwright/test";
import { MainHeader } from "../../common/components/main-header";
import { BasePage } from "../../common/pages/base-page";
import { PageFactory } from "../../../utils/page-factory";
import { CartPage } from "../../cart/pages/cart-page";


export class InventoryPage extends BasePage {
  protected readonly url = '/inventory.html';
}
