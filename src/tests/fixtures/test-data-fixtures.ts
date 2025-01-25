import { test as base } from '@playwright/test';
import { User } from '../../types/data/user';
import { Product } from '../../types/data/inventory-item';


interface TestDataFixtures {
  standardUser: User,
  backpack: Product,
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

  backpack: async({}, use) => {
    await use(
      { 
        id: '4',
        name: 'Sauce Labs Backpack',
        description: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        price: '$29.99',
      }
    )
  }
});
