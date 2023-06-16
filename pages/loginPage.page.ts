import { Page } from "@playwright/test";


export class LoginPage {
  constructor(private page: Page) {}

  loginInput = this.page.getByPlaceholder('Enter User Email');
  passwordInput = this.page.getByPlaceholder('Enter Password')
  keepMeCheckbox = this.page.locator("#keepSignIn");
  loginButton = this.page.locator("#loginButton");

}
