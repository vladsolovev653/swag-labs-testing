import { test as base } from '@playwright/test';
import { User } from '../../types/user';


interface TestDataFixtures {
  standardUser: User,
}

export const test = base.extend<TestDataFixtures>({
  standardUser: async ({}, use) => {
    await use(
      {
        username: process.env.STANDARD_USER_USERNAME as string,
        password: process.env.STANDARD_USER_PASSWORD as string,
      }
    );
  },
});
