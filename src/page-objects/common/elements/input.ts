import test from "@playwright/test";
import { FormattingParams } from "../../../interfaces/formatting-params";
import { ElementProps } from "../../../interfaces/props/element-props";
import { BaseElement } from "./base-element";


/**
 * Поле ввода.
 */
export class Input extends BaseElement {
  protected readonly typeOf = 'поле';

  constructor({ page, selector, name }: ElementProps) {
    super({ page, selector, name });
  }


  /**
   * Заполнить поле.
   * 
   * В шаге будет указано значение.
   * 
   * @param value Значение.
   * @param params Объект с параметрами для динамических селекторов.
   */
  public async fill(value: string, params?: FormattingParams): Promise<void> {
    const locator = this.getLocator(params);

    await test.step(`Указать в ${this.typeOf} "${this.name}" значение "${value}"`, async () => {
      await locator.fill(value);
    });
  }

  
  /**
   * Заполнить приватное поле.
   * 
   * В шаге не будет указано значение.
   * 
   * @param value Значение.
   * @param params Объект с параметрами для динамических селекторов.
   */
  public async fillPrivate(value: string, params?: FormattingParams): Promise<void> {
    const locator = this.getLocator(params);

    await test.step(`Заполнить ${this.typeOf} "${this.name}"`, async () => {
      await locator.fill(value);
    });
  }
}