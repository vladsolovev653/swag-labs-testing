import test from "@playwright/test";
import { BasePageObject } from "../base-page-object";


/**
 * Базовая страница.
 */
export abstract class BasePage extends BasePageObject {
  protected abstract url: string;


  /**
   * Открыть страницу.
   */
  public async open(): Promise<void> {
    await test.step(`Перейти по ссылке "${this.baseUrl}${this.url}"`, async () => {
      await this.page.goto(this.url);      
    });
  }


  /**
   * Базовый url из `playwright.config.ts`.
   */
  private get baseUrl(): string {
    return test.info().project.use.baseURL as string;
  }
}
