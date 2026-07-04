class AccountPage {
    constructor(page) {
        this.page = page;
        this.loggedInAsText = page.locator('a:has-text("Logged in as")');
    }
}

module.exports = AccountPage;