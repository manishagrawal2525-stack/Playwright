import { Page, Locator, expect } from '@playwright/test';

export class SecurePage {
    readonly page: Page;
    readonly logoutButton: Locator;
    readonly openMenu: Locator;

    constructor(page : Page) {
        this.page = page;
        this.openMenu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
    }

    async expectLoaded() {
      await expect(this.page.getByText('Products', { exact: true })).toBeVisible();
}

    async logout() {
      await this.openMenu.click();
      await expect(this.logoutButton).toBeVisible();
      await this.logoutButton.click();
}

}