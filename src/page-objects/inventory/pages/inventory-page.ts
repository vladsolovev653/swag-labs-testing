import test from "@playwright/test";
import { BasePage } from "../../common/pages/base-page";
import { InventoryItem } from "../components/inventory-item";
import { Product } from "../../../types/data/inventory-item";
import { Badge } from "../../common/elements/badge";


/**
 * Inventory page.
 */
export class InventoryPage extends BasePage {
  protected readonly url = '/inventory.html';
  protected readonly name = 'Inventory page';

  
  /* Components */
  private readonly inventoryItem = new InventoryItem(this.page);


  /* Elements */
  private readonly cartBadge = new Badge({ page: this.page, selector: '//span[@data-test="shopping-cart-badge"]', name: 'Cart badge' });

  public async addItemToCart(item: Product) {
    await test.step(`Add item "${item.name}" to cart`, async () => {
      await this.inventoryItem.clickAddToCart(item.id);
    });
  }

  public async cartBadgeShouldHaveCount(value: string) {
    await test.step(`Cart badge should have count "${value}"`, async () => {
      await this.cartBadge.shouldHaveText(value);
    });
  }
}
