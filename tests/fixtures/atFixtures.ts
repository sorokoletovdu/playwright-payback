import { test as baseTest } from '@playwright/test';
import { HomePageAT } from '../pages/AT/homePageAT';
import { RegistrationPage } from '../pages/registrationPage';

type ATFixtures = {
  homePage: HomePageAT;
  registrationPage: RegistrationPage;
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
    const registrationPage = new RegistrationPage(page);
    await use(registrationPage);
  },
});
export { expect } from '@playwright/test';
