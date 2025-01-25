import { Page } from '@playwright/test';


/**
 * Base page object.
 */
export abstract class BasePageObject {
  constructor(protected readonly page: Page) {}
}
