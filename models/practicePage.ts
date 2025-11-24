import { Page } from "@playwright/test";

export class PracticePage {
  readonly page: Page;
  readonly alertButton = 'button#alertBtn';

  constructor(page: Page) {
    this.page = page;
  }
  
  async navigate() {
    await this.page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');
  }

  async triggerAlert() {
    this.page.on('dialog', async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });
    await this.page.click(this.alertButton);
  }
};