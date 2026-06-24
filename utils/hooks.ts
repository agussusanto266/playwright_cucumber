import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from '../utils/world';

Before(async function (this: CustomWorld) {
  await this.initBrowser();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});
