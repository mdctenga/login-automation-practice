import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../models/loginPage';
import { LoggedInPage } from '../models/loggedInPage';

test('Positive test login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loggedInPage = new LoggedInPage(page);
  await loginPage.navigate();
  await loginPage.login('student', 'Password123');

  expect (page.url()).toContain('practicetestautomation.com/logged-in-successfully/');
  expect (await loggedInPage.isSuccessMessageVisible()).toBeTruthy();
  expect (await loggedInPage.isLogoutButtonVisible()).toBeTruthy();

});
