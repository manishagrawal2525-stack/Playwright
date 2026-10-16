import { expect, type Locator, type Page } from '@playwright/test';

export class SauceLoginPage{
    
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;

    constructor (private page: Page) {
        this.usernameInput= page.locator('#user-name');
         this.passwordInput= page.locator('#password');
    }

     async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }

    async login(user: string, pass: string){

        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.page.getByRole('button', {name : 'Login' }).click();
    } 

}

//const loginPage = new SauceLoginPage(page);
//await loginPage.login('standard_user', 'secret_sauce');