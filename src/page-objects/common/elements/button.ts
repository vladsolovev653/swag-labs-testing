import test from "@playwright/test";
import { FormattingParams } from "../../../interfaces/formatting-params";
import { ElementProps } from "../../../interfaces/props/element-props";
import { BaseElement } from "./base-element";


/**
 * Кнопка.
 */
export class Button extends BaseElement {
  protected readonly typeOf = 'кнопка';

  constructor({ page, selector, name }: ElementProps) {
    super({ page, selector, name });
  }


  /**
   * Клик по элементу.
   * @param params Объект с параметрами для динамических селекторов.
   */
  public async click(params?: FormattingParams): Promise<void> {
    const locator = this.getLocator(params);

    await test.step(`Нажать ${this.declineTypeOf} "${this.name}"`, async () => {
      await locator.click();
    });
  }
}
