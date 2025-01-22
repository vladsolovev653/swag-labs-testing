import { Page } from '@playwright/test';


/**
 * Базовый объект страницы.
 */
export abstract class BasePageObject {
  constructor(protected readonly page: Page) {}
}
