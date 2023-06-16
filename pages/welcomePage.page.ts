import { Page } from "@playwright/test";

export class WelcomePage {
    constructor(private page: Page) {}

    welcomeMessage = this.page.getByTestId('hello')
    logoutButton = this.page.getByTestId('logoutButton')
}