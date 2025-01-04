import test, { Page } from "@playwright/test";
import { BasePage } from "../../common/pages/base-page";
import { MainHeader } from "../../common/components/main-header";
import { InventoryItemCard } from "../components/inventory-item-card";
import { InventoryItemData } from "../../../interfaces/data/inventory-item-data";


/**
 * Страница с товарами.
 */
export class InventoryPage extends BasePage {
  protected readonly url = '/inventory.html';
  protected readonly name = 'Страница с товарами';

  public readonly header = new MainHeader(this.page);
  private readonly itemCard = new InventoryItemCard(this.page);

  constructor(page: Page) {
    super(page);
  }


  /**
   * Добавление товара в корзину.
   * @param itemData Данные товара.
   */
  public async addItemToCart(itemData: InventoryItemData): Promise<void> {
    await test.step(`Добавить товар "${itemData.name}" в корзину`, async () => {
      await this.itemCard.addToCart(itemData.id);      
    });
  }
}
