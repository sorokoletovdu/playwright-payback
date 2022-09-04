import { test, expect } from '../fixtures/itFixtures';
import {
  generateRandomEmail,
  generateRandomNumericString,
  generateRandomAlphaString,
  generateRandomDate,
} from '../helpers/random';

test.use({ baseURL: 'https://www.payback.it' });

test.describe('Positive registration scenario for IT', () => {
  test('Registration a new loyalty card', async ({
    homePage,
    signUpOptionsPage,
    registrationPage,
    page,
  }) => {
    await homePage.navigateToRegistration();
    await signUpOptionsPage.checkSignUpOptionsPageIsOpened();

    await signUpOptionsPage.navigateToLoyaltyCardRegistration();
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
    const zip = generateRandomNumericString(5);
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
