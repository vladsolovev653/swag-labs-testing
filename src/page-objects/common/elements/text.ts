import { ElementProps } from "../../../interfaces/props/element-props";
import { BaseElement } from "./base-element";


/**
 * Текст.
 */
export class Text extends BaseElement {
  protected readonly typeOf = 'текст';

  constructor({ page, selector, name }: ElementProps) {
    super({ page, selector, name });
  }
}
