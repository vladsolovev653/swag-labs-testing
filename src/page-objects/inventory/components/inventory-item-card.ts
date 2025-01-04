import { Page } from "@playwright/test";
import { BaseComponent } from "../../common/components/base-component";
import { Text } from "../../common/elements/text";
import { Button } from "../../common/elements/button";


/**
 * Карточка товара.
 */
export class InventoryItemCard extends BaseComponent {
  private readonly parentSelector = '//a[@id="item_{id}_title_link"]/parent::div/parent::div/preceding-sibling::div/parent::div'


  /* Локаторы */

  private readonly name = new Text({ page: this.page, selector: `${this.parentSelector}//div[@class="inventory_item_name "]`, name: 'Название товара' });
  private readonly description = new Text({ page: this.page, selector: `${this.parentSelector}//div[@class="inventory_item_desc"]`, name: 'Описание товара' });
  private readonly price = new Text({ page: this.page, selector: `${this.parentSelector}//div[@class="inventory_item_price"]`, name: 'Стоимость товара' });
  private readonly addToCartBtn = new Button({ page: this.page, selector: `${this.parentSelector}//button[text()="Add to cart"]`, name: 'Add to cart' });
  private readonly removeFromCartBtn = new Button({ page: this.page, selector: `${this.parentSelector}//button[text()="Remove"]`, name: 'Remove' });

  constructor(page: Page) {
    super(page);
  }

  public async addToCart(id: string) {
    await this.addToCartBtn.click({ id });
  }
}
