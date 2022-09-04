import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage';

export class HomePageIT extends BasePage {
  readonly menuItems: object;
  readonly loginHeader: Locator;
  readonly loginSubtitle: Locator;
  readonly cardOrEmail: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loginHeader = page.locator('.pb-login_nav>div>h2');
    this.loginSubtitle = page.locator('.pb-login__content > p:nth-child(3)');
    this.cardOrEmail = page.locator('[name="alias"]');
    this.submitButton = page.locator('[name="login-button-30663"]');
    this.menuItems = {
      howPaybackWorks: {
        item: 1,
        secondLevel: {
          partners: 1,
          howToUsePoints: 2,
          howOnlineShopWorks: 3,
          paybackApp: 4,
          partnerFlyers: 5,
          fromPointsToMiles: 6,
        },
      },
      onlineShopPoints: {
        item: 2,
        secondLevel: {
          groupon: 1,
          booking: 2,
          eBay: 3,
          shein: 4,
          nespresso: 5,
          allPartners: 6,
          helpPointsOnline: 7,
        },
      },
      couponsAndExtraPoints: {
        item: 3,
      },
      awardsCatalog: {
        item: 4,
        secondLevel: {
          discountsAndGiftcards: 1,
          emotionsAndExperiences: 2,
          freeTime: 3,
          chefProofKitchen: 4,
          homeSweatHome: 5,
          healthAndBeauty: 6,
        },
      },
      amExprPaybackCard: {
        item: 5,
      },
    };
  }

  async login(cardOrEmail: string, password: string) {
    await this.cardOrEmail.fill(cardOrEmail);
    await this.submitButton.click();
  }

  async openHomePage() {
    await this.page.goto('/');
  }
}
