import { expect, Locator, Page } from '@playwright/test';
import { RegistrationPageAT } from '../AT/registrationPageAT';

export class RegistrationPageIT extends RegistrationPageAT {
  readonly stepThreeDay: Locator;
  readonly stepThreeMonth: Locator;
  readonly stepThreeYear: Locator;
  readonly stepThreeStreetLineTwo: Locator;

  constructor(page: Page) {
    super(page);
    this.stepThreeDay = page.locator('[placeholder="gg"]');
    this.stepThreeMonth = page.locator('[placeholder="mm"]');
    this.stepThreeYear = page.locator('[placeholder="aaaa"]');
    this.stepThreeStreetLineTwo = page.locator('#houseNumber');
  }

  async checkRegistrationPageIsOpened() {
    await expect(this.page).toHaveURL(/.*registra-la-carta.*/);
  }

  async selectGender(gender: string) {
    const genderId = gender === 'Male' ? '1501' : '1502';
    await this.stepThreeSalutation.selectOption(genderId);
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
  }
}
