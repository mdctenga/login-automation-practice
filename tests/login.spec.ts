import { test, expect } from '@playwright/test';
import { LoginPage } from '../models/loginPage';
import { LoggedInPage } from '../models/loggedInPage';
import { dropdownPage } from '../models/dropdownPage';
import { checkboxPage } from '../models/checkboxPage';
import { PracticePage } from '../models/practicePage';
import { PostsAPI } from '../models/apiPage';

// lesson 1
test('As a user, I can navigate to example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveURL('https://example.com/');
  await expect(page.locator('h1')).toHaveText('Example Domain');
});

// lesson 2
test('Positive test login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loggedInPage = new LoggedInPage(page);
  await loginPage.navigate();
  await loginPage.login('student', 'Password123');

  expect(page.url()).toContain('practicetestautomation.com/logged-in-successfully/');
  expect(await loggedInPage.isSuccessMessageVisible()).toBeTruthy();
  expect(await loggedInPage.isLogoutButtonVisible()).toBeTruthy();
});

// lesson 3
test('As a logged in user, I want to log out', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loggedInPage = new LoggedInPage(page);
  await loginPage.navigate();
  await loginPage.login('student', 'Password123');

  await loggedInPage.logout();
  expect(page.url()).toContain('practicetestautomation.com/practice-test-login/');
});

// lesson 4 & 5
test('As a user, I can select an option from a dropdown', async ({ page }) => {
  const dropdown = new dropdownPage(page);
  await dropdown.navigate();
  await dropdown.selectOption('2');
  const selectedValue = await dropdown.getSelectedValue();
  expect(selectedValue).toBe('2');
});

test('As a user, I can check a checkbox', async ({ page }) => {
  const checkbox = new checkboxPage(page);
  await checkbox.navigate();

  const isChecked = await checkbox.checkCheckbox();
  expect(isChecked).toBe(true);
});

test('As a user, I can get an alert message', async ({ page }) => {
  const practicePage = new PracticePage(page);
  await practicePage.navigate();
  await practicePage.triggerAlert();
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toBe('I am an alert box!');
    await dialog.accept();
  });
});

// lesson 6
test('As an api engineer, I can successfully get a response from an endpoint', async ({ request }) => {
  const apiPage = new PostsAPI(request);
  const response = await apiPage.getPostsByPostId(1);
  expect(response).toHaveProperty('id', 1);
  expect(response).toHaveProperty('userId', 1);
  expect(response).toHaveProperty('title');
  expect(response).toHaveProperty('body');
});
