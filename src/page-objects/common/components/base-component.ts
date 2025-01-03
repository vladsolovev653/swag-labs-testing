import { Page } from "@playwright/test";
import { BasePageObject } from "../base-page-object";


/**
 * Базовый компонент.
 */
export abstract class BaseComponent extends BasePageObject {
  constructor(page: Page) {
    super(page);
  }
}
