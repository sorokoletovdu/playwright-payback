import { test as baseTest } from '@playwright/test';
import { HomePageIT } from '../pages/IT/homePageIT';
import { SignUpOptions } from '../pages/IT/signUpOptionsPageIT';
import { RegistrationPageIT } from '../pages/IT/registrationPageIT';

type ITFixtures = {
  homePage: HomePageIT;
  signUpOptionsPage: SignUpOptions;
  registrationPage: RegistrationPageIT;
};

export const test = baseTest.extend<ITFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePageIT(page);
    await homePage.openHomePage();
    await homePage.acceptCookies();
    await page.reload();
    await use(homePage);
  },
  signUpOptionsPage: async ({ page }, use) => {
    const signUpOptionsPage = new SignUpOptions(page);
    await use(signUpOptionsPage);
  },
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPageIT(page);
    await use(registrationPage);
  },
});
export { expect } from '@playwright/test';
