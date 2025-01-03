import { Page, test, expect } from "@playwright/test";
import { BasePageObject } from "../base-page-object";
import { FormattingParams } from "../../../interfaces/formatting-params";
import { formatString } from "../../../utils/format-string";


/**
 * Базовая страница.
 */
export abstract class BasePage extends BasePageObject {
  protected abstract readonly name: string;
  protected abstract readonly url: string;

  constructor(page: Page) {
    super(page);
  }


  /**
   * Открытие страницы.
   * @param options Объект с параметрами для форматирования URL. 
   */
  public async open(params?: Record<string, string>): Promise<void> {
    const fullUrl = this.getFullUrl(params);

    await test.step(`Открыть страницу "${this.name}" по ссылке "${fullUrl}"`, async () => {
      await this.page.goto(fullUrl);
    });
  } 


  /**
   * Проверка URL страницы.
   */
  public async shouldHaveValidUrl(params?: Record<string, string>): Promise<void> {
    const fullUrl = this.getFullUrl(params);
    
    await test.step(`URL текущей страницы "${fullUrl}"`, async () => {
      await expect(this.page).toHaveURL(this.url);
    });
  }

  
  /**
   * Получение полного URL.
   * @param options Объект с параметрами для форматирования URL. 
   */
  private getFullUrl(params?: FormattingParams): string {
    let url = this.url;

    if (params) {
      url = formatString(url, params);
    }
    
    return `${this.baseUrl}${url}`;
  }

  
  /**
   * Получение базового URL.
   */
  private get baseUrl(): string {
    return test.info().project.use.baseURL as string;
  }
}
