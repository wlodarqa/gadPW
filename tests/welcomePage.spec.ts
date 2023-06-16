import { test, expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcomePage.page";
import {StartPage} from "../pages/startPage.page";

test.describe("Start Page", () => {
    let welcomePage: WelcomePage;
    let startPage: StartPage

    test.beforeEach(async ({ page }) => {

        await page.goto("/");
        welcomePage = new WelcomePage(page);
        startPage = new StartPage(page);
    });

    test("User can click button 'Lets start'", async ({ page }) => {
        // await expect(welcomePage.welcomeMessage).toHaveText('Hi Moses.Armstrong@Feest.ca!')
        await page.request.post('http://localhost:3000/api/login', {
            form: {
                "email": "Moses.Armstrong@Feest.ca",
                "password": "test1"
            }
        });
        await startPage.startButton.click();
        await expect(page).toHaveURL("/articles.html");
    });
});