import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../utils/world';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/dashboardPage';

Given('User open saucedemo login page', async function (this: CustomWorld) {
  await this.page.goto('https://www.saucedemo.com/');
});

When('User login with valid credential', async function (this: CustomWorld) {
  console.log('test');

  const loginPage = new LoginPage(this.page);
  console.log('2');
  
  await loginPage.inputValidUsername('standard_user');

  console.log(3);
  
  await loginPage.inputValidPassword('secret_sauce');
  await loginPage.clickButtonLogin();

  console.log('test1');
});

Then('User successfully login', async function (this: CustomWorld) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.inventoryContainerVisible();
});
