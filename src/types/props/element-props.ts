import { Page } from "@playwright/test";

export interface ElementProps {
  page: Page,
  selector: string,
  name: string,
}