import { expect, Locator, Page } from 'playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('#inventory-container');
  }

  async inventoryContainerVisible() {
    await this.inventoryContainer.isVisible();
  }
}
