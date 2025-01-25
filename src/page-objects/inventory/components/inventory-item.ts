import { BaseComponent } from "../../common/components/base-component";
import { Button } from "../../common/elements/button";


export class InventoryItem extends BaseComponent {
  private readonly parentSelector = '//a[@id="item_{id}_title_link"]/parent::div/parent::div/parent::div';
  private readonly addToCartBtn = new Button({ page: this.page, selector: `${this.parentSelector}//button[text()="Add to cart"]`, name: 'Add to cart' });

  public async clickAddToCart(id: string) {
    await this.addToCartBtn.click({ id });
  }
}
