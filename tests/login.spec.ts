import { test, expect, Page } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});
