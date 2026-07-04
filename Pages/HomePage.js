class HomePage {
    constructor(page) {
    this.page = page;
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.homeMenuLink = page.getByRole('link', { name: 'Home'});
    this.productsMenuLink = page.getByRole('link', { name: 'Products' });
    this.cartMenuLink = page.getByRole('link', { name: 'Cart' });
    this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.logo = page.locator('.logo img');    
    this.mainMenu = page.locator('.shop-menu.pull-right');
}

    async goto() {
    await this.page.goto('https://www.automationexercise.com/');
    }

    async clickSignupLogin() {
    await this.signupLoginLink.click();
    }

        async clickProducts() {
    await this.productsMenuLink.click();
        }

        
}

module.exports = HomePage;