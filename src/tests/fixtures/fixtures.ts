import { mergeTests } from '@playwright/test';
import { test as pageFactoryFixtures } from './page-factory-fixtures';
import { test as testDataFixtures } from './test-data-fixtures';
import { test as pageFixtures } from './page-fixtures';


export const test = mergeTests(pageFactoryFixtures, pageFixtures, testDataFixtures);

export { expect } from '@playwright/test';
