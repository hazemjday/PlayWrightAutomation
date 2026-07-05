const { test, expect } = require('../Fixtures/pageFixtures');

test('User can start signup', async ({ page, homePage, signUpPage }) => {
    await homePage.goto();
    await homePage.clickSignupLogin();
    await signUpPage.signup('Hazem');
    // Verify navigation to the signup page
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/signup/);
    await signUpPage.fillRegistrationForm();
    await signUpPage.createAccount();
    await expect(page).toHaveURL(/account_created/);
    await expect(signUpPage.accountCreatedMessage).toBeVisible();
    await expect(signUpPage.accountCreatedMessage).toContainText('Account Created!');
});