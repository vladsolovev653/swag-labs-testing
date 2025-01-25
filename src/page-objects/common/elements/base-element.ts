import test, { expect, Locator } from "@playwright/test";
import { ElementProps } from "../../../types/props/element-props";
import { TemplateValues } from "../../../types/template-values";
import { formatTemplate } from "../../../utils/format-template";
import { BasePageObject } from "../base-page-object";


/**
 * Base element like button, input etc.
 */
export abstract class BaseElement extends BasePageObject {
  protected abstract readonly typeOf: string;
  private readonly selector: string;
  protected readonly name: string;

  constructor({ page, selector, name }: ElementProps) {
    super(page);
    this.selector = selector;
    this.name = name;
  }

  public async click(templateValues?: TemplateValues) {
    const locator = this.getLocator(templateValues);

    await test.step(`Click on ${this.typeOf} "${this.name}"`, async () => {      
      await locator.click();
    });
  }

  public async shouldHaveText(value: string, templateValues?: TemplateValues)  {
    const locator = this.getLocator(templateValues);

    await test.step(`${this.typeOfUpper} "${this.name}" should have text "${value}"`, async () => {
      await expect(locator).toHaveText(value);
    });
  }

  protected getLocator(templateValues?: TemplateValues): Locator {
    let selector = this.selector;

    if (templateValues) {
      selector = formatTemplate(selector, templateValues);
    }

    return this.page.locator(selector);
  }

  private get typeOfUpper(): string {
    return this.typeOf.charAt(0).toUpperCase() + this.typeOf.slice(1);
  }
}
