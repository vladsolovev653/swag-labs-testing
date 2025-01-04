import { ElementProps } from "../../../interfaces/props/element-props";
import { BaseElement } from "./base-element";


/**
 * Заголовок.
 */
export class Heading extends BaseElement {
  protected readonly typeOf = 'заголовок';

  constructor({ page, selector, name }: ElementProps) {
    super({ page, selector, name });
  }
}
