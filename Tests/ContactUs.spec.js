const { test, expect } = require('../Fixtures/pageFixtures');


// it is needed tyo be inserted correctly
test.describe('Contact us Page', () => {
    test('contact us verification', async ({ page, contactUsPage, homePage}) => {
    await homePage.goto();
    await contactUsPage.clickContactUs();
    await expect(page).toHaveURL(/\/contact_us/);
    await page.waitForTimeout(2000);
    await contactUsPage.fillContactForm('Hazem', 'hazem@test.com', 'Hello', 'This is a message');
    await contactUsPage.acceptDialog();
    await contactUsPage.submitForm();    
    await expect(contactUsPage.successMessage).toBeVisible();
});

});