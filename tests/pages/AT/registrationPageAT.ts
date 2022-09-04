import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage';

export class RegistrationPageAT extends BasePage {
  readonly stepOneExistingCardRB: Locator;
  readonly stepOneCardNumber: Locator;
  readonly stepOneCVC: Locator;
  readonly stepOneNewCard: Locator;
  readonly stepTwoEmail: Locator;
  readonly stepTwoPin: Locator;
  readonly stepThreeSalutation: Locator;
  readonly stepThreeFirstName: Locator;
  readonly stepThreeLastName: Locator;
  readonly stepThreeDOB: Locator;
  readonly stepThreeDay: Locator;
  readonly stepThreeMonth: Locator;
  readonly stepThreeYear: Locator;
  readonly stepThreeMobilePhone: Locator;
  readonly stepThreeStreetLineOne: Locator;
  readonly stepThreeStreetLineTwo: Locator;
  readonly stepThreeZip: Locator;
  readonly stepThreeCity: Locator;
  readonly stepFourAdvAgreement: Locator;
  readonly stepFourNewsletterAgreement: Locator;
  readonly stepFourCheckboxes: Locator;
  readonly stepFourSubmitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.stepOneExistingCardRB = page.locator(
      'for="cardSectionVariant-verifyAlias"',
    );
    this.stepOneCardNumber = page.locator('#cardnumber');
    this.stepOneCVC = page.locator('#cvc');
    this.stepOneNewCard = page.locator(
      'label[for="cardSectionVariant-cardPicker"]',
    );
    this.stepTwoEmail = page.locator('[name="email"]');
    this.stepTwoPin = page.locator('[name="pin"]');
    this.stepThreeSalutation = page.locator('select[name="salutation"]');
    this.stepThreeFirstName = page.locator('#firstName');
    this.stepThreeLastName = page.locator('#lastName');
    this.stepThreeDOB = page.locator('[name="birthday"]');
    this.stepThreeDay = page.locator('[placeholder="TT"]');
    this.stepThreeMonth = page.locator('[placeholder="MM"]');
    this.stepThreeYear = page.locator('[placeholder="JJJJ"]');
    this.stepThreeMobilePhone = page.locator('#mobile[PhoneNumberField]');
    this.stepThreeStreetLineOne = page.locator('#street');
    this.stepThreeStreetLineTwo = page.locator('#floor');
    this.stepThreeZip = page.locator('#zipCode');
    this.stepThreeCity = page.locator('#city');
    this.stepFourSubmitButton = page.locator('.pb-button_enrollment');
    this.stepFourCheckboxes = page.locator('.pb-checkbox_paneled>label');
  }

  getLocatorForStepHeader(step: number) {
    return this.page.locator(`[data-step="${step}"] h3`);
  }

  getLocatorForStepSubmitButton(step: number) {
    return this.page.locator(`[data-step="${step}"] .js__sign-up-continue-btn`);
  }

  getLocatorForEditStepLink(step: number) {
    return this.page.locator(`[data-step="${step}"] .js__sign-up-edit-btn`);
  }

  getLocatorForErrorFieldMessage(step: number) {
    return this.page.locator(`[data-step="${step}"] .pb-input_invalid`);
  }

  async selectGender(gender: string) {
    const genderId = gender === 'Male' ? '2' : '1';
    await this.stepThreeSalutation.selectOption(genderId);
  }

  getLocatorForRandomNewCardType() {
    const randomItem = Math.floor(Math.random() * 6) + 1;
    return this.page.locator(
      `.swiper-slide-active>div:nth-child(${randomItem})`,
    );
  }

  async fillInStepOneForExistingCard(cardNumber: string, cvc: string) {
    await this.stepOneExistingCardRB.click();
    await this.stepOneCardNumber.fill(cardNumber);
    await this.stepOneCVC.fill(cvc);
    const continueButton = this.getLocatorForStepSubmitButton(1);
    await continueButton.click();
  }

  async fillInStepOneForNewCard() {
    await this.stepOneNewCard.click();
    const randomCardType = this.getLocatorForRandomNewCardType();
    await randomCardType.click();
    const continueButton = this.getLocatorForStepSubmitButton(1);
    await continueButton.click();
  }

  async fillInStepTwo(email: string, pin: string) {
    const error = this.getLocatorForErrorFieldMessage(2);
    const header = this.getLocatorForStepHeader(2);
    await this.stepTwoEmail.fill(email);
    await this.stepTwoPin.fill(pin);
    await header.click();
    await expect(error).toBeHidden();
    const continueButton = this.getLocatorForStepSubmitButton(2);
    await continueButton.click();
  }

  async fillInStepThree(
    firstName: string,
    lastName: string,
    day: string,
    month: string,
    year: string,
    addressLineOne: string,
    addressLineTwo: string,
    zip: string,
    city: string,
  ) {
    const error = this.getLocatorForErrorFieldMessage(3);
    const header = this.getLocatorForStepHeader(3);
    await this.selectGender('Male');
    await this.stepThreeFirstName.fill(firstName);
    await this.stepThreeLastName.fill(lastName);
    await this.stepThreeDOB.click();
    await this.stepThreeDay.fill(day);
    await this.stepThreeMonth.fill(month);
    await this.stepThreeYear.fill(year);
    await this.stepThreeStreetLineOne.fill(addressLineOne);
    await this.stepThreeStreetLineTwo.fill(addressLineTwo);
    await this.stepThreeZip.fill(zip);
    await this.stepThreeCity.fill(city);
    await header.click();
    await expect(error).toBeHidden();
    const continueButton = this.getLocatorForStepSubmitButton(3);
    await continueButton.click();
  }

  async fillInStepFour() {
    await this.stepFourCheckboxes.nth(0).click();
    await this.stepFourCheckboxes.nth(1).click();
  }

  async registrationSubmit() {
    await this.stepFourSubmitButton.click();
  }

  async checkRegistrationPageIsOpened() {
    await expect(this.page).toHaveURL(/.*anmelden.*/);
  }

  async checkSubmitButtonIsGreen(color: string) {
    ///
    const backgroundColor = await this.stepFourSubmitButton.evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue('background-color');
    });
    expect(backgroundColor).toBe(color);
  }
}
