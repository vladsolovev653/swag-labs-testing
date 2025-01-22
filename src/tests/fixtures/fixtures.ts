import { mergeTests } from '@playwright/test';
import { test as pageFixtures } from './page-fixtures';
import { test as testDataFixtures } from './test-data-fixtures';


export const test = mergeTests(pageFixtures, testDataFixtures);

export { expect } from '@playwright/test';
