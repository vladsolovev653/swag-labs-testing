import { Page } from "@playwright/test";
import { BasePage } from "../../common/pages/base-page";


export class InventoryPage extends BasePage {
  protected readonly url = '/inventory.html';
  protected readonly name = 'Страница с товарами';

  constructor(page: Page) {
    super(page);
  }
}