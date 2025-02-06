import test, { expect } from "@playwright/test";
import { BasePageObject } from "../base-page-object";
import { MainHeader } from "../components/main-header/main-header";


/**
 * Base page.
 */
export abstract class BasePage extends BasePageObject {
  protected abstract readonly url: string;
  protected abstract readonly name: string;

  public readonly header = new MainHeader(this.page);

  /**
   * Открыть страницу.
   */
  public async open(): Promise<void> {
    await test.step(`Open page "${this.name}" by url "${this.baseUrl}${this.url}"`, async () => {
      await this.page.goto(this.url);      
      await this.shouldHaveValidURL();
    });
  }


  public async shouldBeLoaded(): Promise<void> {
    await test.step(`Page "${this.name}" should be loaded`, async () => {
      await this.shouldHaveValidURL();
    });
  }

  
  private async shouldHaveValidURL(): Promise<void> {
    await test.step(`Page "${this.name}" should have URL "${this.baseUrl}${this.url}"`, async () => {
      await expect(this.page).toHaveURL(this.url);
    });
  }


  /**
   * baseURL from `playwright.config.ts`.
   */
  private get baseUrl(): string {
    return test.info().project.use.baseURL as string;
  }
}
