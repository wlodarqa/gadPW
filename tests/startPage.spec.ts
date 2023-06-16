import {test, expect} from "@playwright/test";
import { StartPage } from "../pages/startPage.page";

test.describe("Start Page", () => {
  let startPage: StartPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    startPage = new StartPage(page);
  });

  test("User can click button 'Lets start'", async ({ page }) => {
    await expect(startPage.WelcomeTxt).toBeVisible();
    await startPage.startButton.click();
    await expect(page).toHaveURL("/articles.html");
  });
});
