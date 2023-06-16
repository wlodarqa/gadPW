import { Page } from "@playwright/test";

export class StartPage {
  constructor(private page: Page) {}

  startButton = this.page.getByRole("button", { name: "Let's start!" });
  WelcomeTxt = this.page.getByText("Explore and create testing content!");
}
