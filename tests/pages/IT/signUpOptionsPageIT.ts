import { expect, Locator, Page } from '@playwright/test';
import { HomePageIT } from './homePageIT';

export class SignUpOptions extends HomePageIT {
  readonly signUpWithLoyaltyCardOnly: Locator;
  readonly sugnUpForAmericanExpress: Locator;

  constructor(page: Page) {
    super(page);
    this.signUpWithLoyaltyCardOnly = page.locator(
      '.pb-teaser__button .pb-button_secondary',
    );
    this.sugnUpForAmericanExpress = page.locator(
      '.pb-teaser__button .pb-button_primary',
    );
  }

  async navigateToLoyaltyCardRegistration() {
    await this.signUpWithLoyaltyCardOnly.click();
  }

  async navigateToAmericanExpressRegistration() {
    await this.sugnUpForAmericanExpress.click();
  }

  async checkSignUpOptionsPageIsOpened() {
    await expect(this.page).toHaveURL(/.*iscriviti-a-payback.*/);
  }
}
