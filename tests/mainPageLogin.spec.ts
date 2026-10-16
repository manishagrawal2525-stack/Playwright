import { test } from '@playwright/test';
import { SauceLoginPage } from './Login.page';
import { SecurePage } from './Secure.Page';

test.describe('Login', () => {
  let loginPage: SauceLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new SauceLoginPage(page);
    await loginPage.open();
  })

  test('valid test login and logout', { tag: ['@smoke'] }, async ({ page }) => {

    const securePage = new SecurePage(page);

    await test.step('Log in', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
  });

   await test.step('Secure area is displayed', async () => {
      await securePage.expectLoaded();
    });

    await test.step('Log Out' , async () => {
        await securePage.logout();

    }
)

  })
});
