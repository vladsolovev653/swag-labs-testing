import { Page } from "@playwright/test";
import { BaseComponent } from "./base-component";


/**
 * Бургер меню основного хедера.
 */
export class BurgerMenu extends BaseComponent {
  constructor(page: Page) {
    super(page);
  } 
}