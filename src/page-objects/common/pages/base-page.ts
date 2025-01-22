import test from "@playwright/test";
import { BasePageObject } from "../base-page-object";
import { MainHeader } from "../components/main-header";
import { CartPage } from "../../cart/pages/cart-page";
import { PageFactory } from "../../../utils/page-factory";


export abstract class BasePage extends BasePageObject {
  protected abstract url: string;

  /* Components */
  public readonly header = new MainHeader(this.page);

  public async open(): Promise<void> {
    await test.step(`Go to url "${this.baseUrl}${this.url}"`, async () => {
      await this.page.goto(this.url);      
    });
  }

  private get baseUrl(): string {
    return test.info().project.use.baseURL as string;
  }
}
