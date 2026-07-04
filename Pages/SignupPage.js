class SignupPage {
    constructor(page) {
        this.page = page;

        this.signupNameInput = page.locator('[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
        this.mrRadio = page.locator('#id_gender1');

        // Account Information
        this.nameInput = page.locator('[data-qa="name"]');
        this.passwordInput = page.locator('[data-qa="password"]');

        // Address Information
        this.firstNameInput = page.locator('[data-qa="first_name"]');
        this.lastNameInput = page.locator('[data-qa="last_name"]');
        this.stateInput = page.locator('[data-qa="state"]');
        this.cityInput = page.locator('[data-qa="city"]');
        this.zipcodeInput = page.locator('[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
        this.address = page.locator('[data-qa="address"]');
        this.accountCreatedMessage = page.locator('[data-qa="account-created"]');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
        // Button
        

    }

    async fillSignupForm(name) {
        const randomString = Math.random().toString(36).substring(2, 8);
        const email = `${randomString}@${Math.random().toString(36).substring(2, 6)}.com`;
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
    }

    async clickSignupButton() {
        await this.signupButton.click();
    }

    async signup(name) {
        await this.fillSignupForm(name);
        await this.clickSignupButton();
    }

    async fillRegistrationForm() {
        await this.mrRadio.check();

        await this.nameInput.fill('Hazem');
        await this.passwordInput.fill('Password123');

        await this.firstNameInput.fill('Hazem');
        await this.lastNameInput.fill('Jday');
        await this.address.fill('Sousse, tunisia');
        await this.stateInput.fill('Tunis');
        await this.cityInput.fill('Tunis');
        await this.zipcodeInput.fill('1000');
        await this.mobileNumberInput.fill('20123456');
    }

    async createAccount() {
        await this.createAccountButton.click();
    }



}

module.exports = SignupPage;