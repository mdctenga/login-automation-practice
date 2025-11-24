import { Page } from '@playwright/test';

export class checkboxPage {
  readonly page: Page;
  readonly checkboxSelector = '#checkbox';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }
  
  async checkCheckbox() {
    const firstCheckbox = this.page.locator('form#checkboxes input[type="checkbox"]').first();
    await firstCheckbox.setChecked(true);
    
    const isChecked = await firstCheckbox.isChecked();
    if (await firstCheckbox.isChecked()) {
      console.log('Checkbox is now checked.');
    } else {
      console.log('Failed to check the checkbox.');
    }
    return isChecked;
  }
}