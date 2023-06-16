import { Page } from "@playwright/test";

export class ArticlePage {
  constructor(private page: Page) {}

  userMenu = this.page.getByTestId("btn-dropdown");
  loginButton = this.page.locator("#loginBtn");
  registerButton = this.page.locator("#registerBtn");
  commentsButton = this.page.getByTestId("open-comments");
  ArticlesButton = this.page.getByTestId("open-articles");
  searchInput = this.page.getByTestId("search-input");
  searchButton = this.page.getByTestId("search-button");
  nextButton = this.page.getByTestId("next-button");
  previewButton = this.page.getByTestId("prev-button");
  currentPage = this.page.getByTestId("current-page");
  setItemsPerScreen = this.page.getByTestId("per-page-select");
}
