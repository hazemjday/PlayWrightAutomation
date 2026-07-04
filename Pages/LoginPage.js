class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginEmailInput = page.locator('input[data-qa="login-email"]');
        this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.loginErrorMessage = page.locator('p:has-text("Your email or password is incorrect!")');
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
    }

    async login(email, password) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    async clickLogout() {
        await this.logoutLink.click();
    }
}

module.exports = LoginPage;