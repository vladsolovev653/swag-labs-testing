import { Page } from '@playwright/test';
import { PageEnum } from '../enums/page-enum';
import { BasePage } from '../page-objects/common/pages/base-page';


/**
 * Фабрика страниц.
 */
export class PageFactory {
  /**
   * Приватный Map для хранения страниц
   */
  private static readonly pages: Map<PageEnum, new (page: Page) => BasePage> = new Map();


  /**
   * Регистрирует страницу в фабрике.
   * @param key - Ключ страницы (из enum PageEnum).
   * @param pageClass - Класс страницы.
   */
  public static setPage<T extends BasePage>(key: PageEnum, pageClass: new (page: Page) => T): void {
    if (this.pages.has(key)) {
      throw new Error(`Страница с ключом "${key}" уже зарегистрирована.`);
    }
    this.pages.set(key, pageClass);
  }


  /**
   * Возвращает экземпляр страницы по ключу.
   * @param key - Ключ страницы (из enum PageEnum).
   * @param page - Экземпляр Page из Playwright.
   * @returns Экземпляр страницы.
   */
  public static getPage<T extends BasePage>(key: PageEnum, page: Page): T {
    const PageClass = this.pages.get(key);

    if (!PageClass) {
      throw new Error(`Страница с ключом "${key}" не зарегистрирована.`);
    }
    
    return new PageClass(page) as T;
  }
}
