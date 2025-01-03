import { Locator, test } from "@playwright/test";
import { FormattingParams } from "../../../interfaces/formatting-params";
import { ElementProps } from "../../../interfaces/props/element-props";
import { formatString } from "../../../utils/format-string";
import { BasePageObject } from "../base-page-object";


/**
 * Базовый элемент.
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


  /**
   * Клик по элементу.
   * @param params Объект с параметрами для динамических селекторов.
   */
  public async click(params?: FormattingParams): Promise<void> {
    const locator = this.getLocator(params);

    await test.step(`Нажать на ${this.declineTypeOf} "${this.name}"`, async () => {
      await locator.click();
    });
  }


  /**
   * Получение локатора из селектора.
   * @param params Объект с параметрами для динамических селекторов.
   * @returns Локатор.
   */
  protected getLocator(params?: FormattingParams): Locator {
    let selector = this.selector;

    if (params) {
      selector = formatString(selector, params); 
    }

    return this.page.locator(selector);
  }


  /**
   * Получение typeOf с заглавной буквы для отчета.
   */
  private get typeOfUpper(): string {
    return this.typeOf.charAt(0).toUpperCase() + this.typeOf.slice(1);
  }


  /**
   * Получение склоненного типа элемента для отчета.
   */
  protected get declineTypeOf(): string {
    if (this.typeOf === 'кнопка') {
      return 'кнопку';
    }

    return this.typeOf;
  }
}
