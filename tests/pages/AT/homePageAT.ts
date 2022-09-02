import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage';

export class HomePageAT extends BasePage {
  readonly menuItems: object;
  readonly loginHeader: Locator;
  readonly loginSubtitle: Locator;
  readonly cardOrEmail: Locator;
  readonly password: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    (this.loginHeader = page.locator('.pb-login_nav>div>h2')),
      (this.loginSubtitle = page.locator(
        '.pb-login__content > p:nth-child(3)',
      )),
      (this.cardOrEmail = page.locator('[name="alias"]')),
      (this.password = page.locator('[name="secret"]')),
      (this.submitButton = page.locator('[name="login-button-1382"]')),
      (this.menuItems = {
        inform: {
          item: 1,
          secondLevel: {
            collectPoints: 1,
            redeemPoints: 2,
            application: 3,
          },
        },
        partner: {
          item: 2,
        },
        scoreOnline: {
          item: 3,
        },
        coupons: {
          item: 4,
        },
        bonuses: {
          item: 5,
        },
      });
  }

  async login(cardOrEmail: string, password: string) {
    await this.cardOrEmail.fill(cardOrEmail);
    await this.password.fill(password);
    await this.submitButton.click();
  }

  async openHomePage() {
    await this.page.goto('/');
  }
}
