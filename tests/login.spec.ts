import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.page";
import { loginData } from "../test-data/login.data";
import {WelcomePage} from "../pages/welcomePage.page";

test.describe("Login Page tests", () => {
  const login = loginData.login;
  const password = loginData.password;
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    loginPage = new LoginPage(page);
    welcomePage = new WelcomePage(page)
  });

  let loginPage: LoginPage;
  let welcomePage: WelcomePage

  test("Login with correct data", async ({ page }) => {
    await loginPage.loginInput.fill(login);
    await loginPage.passwordInput.fill(password);
    await loginPage.keepMeCheckbox.click();
    await loginPage.loginButton.click();
    await expect(page).toHaveURL("/welcome");
    await expect(welcomePage.welcomeMessage).toHaveText('Hi Moses.Armstrong@Feest.ca!')
  });
});
