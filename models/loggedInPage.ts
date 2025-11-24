// // loggedInPage.ts
// import { Page } from '@playwright/test';

// export class LoggedInPage {
//   readonly page: Page;
//   readonly logoutButton = 'text=Log out';  // text selector for logout button
//   readonly successMessageSelector = 'text=Congratulations';  // example selector for success message

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async isSuccessMessageVisible() {
//     return this.page.isVisible(this.successMessageSelector);
//   }

//   async isLogoutButtonVisible() {
//     return this.page.isVisible(this.logoutButton);
//   }
// }

import { Page } from '@playwright/test';

export class LoggedInPage {
  readonly page: Page;
  readonly logoutButton = 'text=Log out';  // text selector for logout button
  readonly successMessageSelector = 'text=Congratulations';  // example selector for success message

  constructor(page: Page) {
    this.page = page;
  }
  
  async isSuccessMessageVisible() {
    return this.page.isVisible('text=Congratulations');
  }

  async isLogoutButtonVisible() {
    return this.page.isVisible('text=Log out');
  }

  async logout() {
    this.page.waitForSelector(this.logoutButton);
    await this.page.click(this.logoutButton);
  }
}