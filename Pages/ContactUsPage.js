class ContactUsPage {
    constructor(page) {
        this.page = page;
        this.contactUsLink = page.getByRole('link', { name: 'Contact us' });
        this.nameInput = page.locator('[data-qa="name"]');
        this.emailInput = page.locator('[data-qa="email"]');
        this.subjectInput = page.locator('[data-qa="subject"]');
        this.messageInput = page.locator('[data-qa="message"]');
        this.submitButton = page.locator('[data-qa="submit-button"]');
        this.successMessage = page.locator('.status.alert-success');
    }

    async clickContactUs() {
        await this.contactUsLink.click();
    }

    async fillContactForm(name, email, subject, message) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill(subject);
        await this.messageInput.fill(message);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async acceptDialog() {
    this.page.on('dialog', dialog => dialog.accept());
}


}

module.exports = ContactUsPage;