import { FormattingParams } from "../interfaces/formatting-params";


/**
 * Форматирование строки.
 * 
 * Заменяет плейсхолдеры в формате `{key}` на значения из `options`.
 * 
 * @param str Строка, которую нужно форматировать.
 * @param options Объект с параметрами для замены.
 * @returns Отформатированная строка.
 * 
 * @example
 * const str = "Hello, {name}! Your id is {id}.";
 * const options = { name: "John", id: "123" };
 * const result = formatString(str, options); // "Hello, John! Your id is 123."
 */
export function formatString(str: string, params: FormattingParams) {
  for (const [key, value] of Object.entries(params)) {
    str = str.replace(`{${key}}`, value);
  }

  return str;
}
