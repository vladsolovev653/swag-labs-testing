import test from "@playwright/test";
import { TemplateValues } from "../../../types/template-values";
import { BaseElement } from "./base-element";


export class Input extends BaseElement {
  protected readonly typeOf = 'input';

  public async fill(value: string, templateValues?: TemplateValues): Promise<void> {
    const locator = this.getLocator(templateValues);

    await test.step(`Fill ${this.typeOf} "${this.name}" with value "${value}"`, async () => {
      await locator.fill(value);
    });
  }


  public async fillPrivate(value: string, templateValues?: TemplateValues): Promise<void> {
    const locator = this.getLocator(templateValues);

    await test.step(`Fill ${this.typeOf} "${this.name}"`, async () => {
      await locator.fill(value);
    });
  }
}
