import { TemplateValues } from "../types/template-values";


export function formatTemplate(str: string, templateValues: TemplateValues) {
  for (const [key, value] of Object.entries(templateValues)) {
    str = str.replace(`{${key}}`, value);
  }

  return str;
}
