import { test as baseTest } from '@playwright/test';
import { HomePageAT } from '../pages/AT/homePageAT';
import { RegistrationPageAT } from '../pages/AT/registrationPageAT';

type ATFixtures = {
  homePage: HomePageAT;
  registrationPage: RegistrationPageAT;
};

export const test = baseTest.extend<ATFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePageAT(page);
    await homePage.openHomePage();
    await homePage.acceptCookies();
    await page.reload();
    await use(homePage);
  },
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPageAT(page);
    await use(registrationPage);
  },
});
export { expect } from '@playwright/test';
