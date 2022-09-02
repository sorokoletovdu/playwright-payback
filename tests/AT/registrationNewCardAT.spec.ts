// import { test, expect, Page } from '@playwright/test';
import { test, expect } from '../fixtures/atFixtures';
import {
  generateRandomEmail,
  generateRandomNumericString,
  generateRandomAlphaString,
  generateRandomDate,
} from '../helpers/random';
// import { HomePageAT } from '../pages/AT/homePageAT';
// import { RegistrationPage } from '../pages/registrationPage';

test.use({ baseURL: 'https://www.payback.at' });

test.describe('Positive registration scenario for AT', () => {
  test('Registration a new card', async ({
    homePage,
    registrationPage,
    page,
  }) => {
    await homePage.navigateToRegistration();
    await registrationPage.checkRegistrationPageIsOpened();

    await registrationPage.fillInStepOneForNewCard();

    const email = generateRandomEmail();
    const pin = generateRandomNumericString(4);
    await registrationPage.fillInStepTwo(email, pin);
    const firstName = generateRandomAlphaString(5);
    const lastName = generateRandomAlphaString(7);
    const dob = generateRandomDate();
    const addressLineOne = generateRandomAlphaString(15);
    const addressLineTwo = generateRandomAlphaString(10);
    const zip = generateRandomAlphaString(6);
    const city = generateRandomAlphaString(7);

    await registrationPage.fillInStepThree(
      firstName,
      lastName,
      dob.day,
      dob.month,
      dob.year,
      addressLineOne,
      addressLineTwo,
      zip,
      city,
    );
    await registrationPage.fillInStepFour();
    // await registrationPage.registrationSubmit();
    await expect(registrationPage.stepFourSubmitButton).toBeVisible();
    await registrationPage.checkSubmitButtonIsGreen('rgb(122, 181, 29)');
  });
});
