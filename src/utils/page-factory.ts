import { Page } from "@playwright/test";
import { BasePage } from "../page-objects/common/pages/base-page";


export class PageFactory {
  public static createPage<T extends BasePage>(PageClass: new (page: Page) => T, page: Page): T {
    const currentPage = new PageClass(page);
    
    return currentPage;
  }
}
