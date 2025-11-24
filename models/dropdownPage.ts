import { Page } from '@playwright/test';

export class dropdownPage {
  readonly page: Page;
  readonly dropdownSelector = '#dropdown';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }

  async selectOption(value: string) {
    const dropdown = this.page.locator(this.dropdownSelector);
    await dropdown.selectOption(value);
    console.log(`Selected option with value: ${value}`);
  }

  async getSelectedValue() {
    const dropdown = this.page.locator(this.dropdownSelector);
    return dropdown.inputValue();
  }
}