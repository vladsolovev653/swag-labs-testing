import { Page } from "@playwright/test";
import { BasePage } from "../page-objects/common/pages/base-page";

export class PageFactory {
  public static async createPage<T extends BasePage>(PageClass: new (page: Page) => T, page: Page): Promise<T> {
    const currentPage = new PageClass(page);
    await currentPage.shouldBeLoaded();
    return currentPage;
  }
}
