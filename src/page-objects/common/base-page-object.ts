import { Page } from "@playwright/test";


/**
 * Базовый page object.
 * 
 * Может содержать общие методы для всех видов page object.
 */
export abstract class BasePageObject {
  constructor(protected readonly page: Page) {}
}
