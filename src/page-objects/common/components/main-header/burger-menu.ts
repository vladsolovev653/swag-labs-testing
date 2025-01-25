import { BaseComponent } from "../base-component";
import { Button } from "../../elements/button";


/**
 * Бургер-меню хедера.
 */
export class BurgerMenu extends BaseComponent {
  private readonly parentSelector = '//div[@class="primary_header"]';
  
  private readonly burgerMenuBtn = new Button({ page: this.page, selector: `${this.parentSelector}//button[@id="react-burger-menu-btn"]`, name: 'Burger menu' });
}
