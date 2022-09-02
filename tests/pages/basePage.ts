import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly homePageButton: Locator;
  readonly loginMenuItem: Locator;
  readonly registerMenuItem: Locator;
  readonly acceptCookiesBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageButton = page.locator('.pb-navigation__logo-container');
    this.loginMenuItem = page.locator('ul.pb-navigation__menu_login');
    this.registerMenuItem = page.locator('.pb-navigation__menu_register');
    this.acceptCookiesBtn = page.locator('#onetrust-accept-btn-handler');
  }

  getFirstLevelMenuItemLocator(item: number) {
    return this.page.locator(
      `.pb-navigation__menu-wrapper_main-navigation > ul > li:nth-child(${item})`,
    );
  }

  getSecondLevelMenuItemLocator(item: number) {
    return this.page.locator(
      `.pb-navigation__menu-wrapper_second-level > ul > li:nth-child(${item})`,
    );
  }

  async acceptCookies() {
    await this.acceptCookiesBtn.click();
  }

  async navigateToHomePage() {
    await this.homePageButton.click();
  }

  async navigateToRegistration() {
    await this.registerMenuItem.click();
  }

  async navigateTpLoginForm() {
    await this.loginMenuItem.click();
  }

  async navigateToFirstMenuItem(item: number) {
    const locator = this.getFirstLevelMenuItemLocator(item);
    await locator.click();
  }

  async navigateToSecondMenuItem(item: number) {
    const locator = this.getSecondLevelMenuItemLocator(item);
    await locator.click();
  }
}
