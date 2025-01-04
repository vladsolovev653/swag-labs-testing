import { Page } from "@playwright/test";
import { BaseComponent } from "./base-component";
import { Heading } from "../elements/heading";
import { Button } from "../elements/button";
import { BurgerMenu } from "./burger-menu";


/**
 * Основной хедер.
 */
export class MainHeader extends BaseComponent {
  public readonly burgerMenu = new BurgerMenu(this.page);


  /* Локаторы */

  private readonly heading = new Heading({ page: this.page, selector: '.app_logo', name: 'Swag Labs' });
  private readonly openCartBtn = new Button({ page: this.page, selector: '[data-test="shopping-cart-link"]', name: 'Перейти в корзину' });
  
  constructor(page: Page) {
    super(page);
  }
}
