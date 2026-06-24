import { expect, Locator, Page } from 'playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly buttonLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsername = page.locator('#user-name');
    this.inputPassword = page.locator('#password');
    this.buttonLogin = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async inputValidUsername(email: string) {
    await this.inputUsername.fill(email);
  }

  async inputValidPassword(password: string) {
    await this.inputPassword.fill(password);
  }

  async clickButtonLogin() {
    await this.buttonLogin.click();
  }
}
