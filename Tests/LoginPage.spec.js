const { test, expect } = require('../fixtures/pageFixtures');
const { existingUser } = require('../utils/testData');

    test.describe('Login', () => {

    test('devrait se connecter avec un compte valide existant', async ({ homePage, signupLoginPage, accountPage }) => {
        await homePage.goto();
        await homePage.clickSignupLogin();

        await signupLoginPage.login(existingUser.email, existingUser.password);
        await expect(accountPage.loggedInAsText).toBeVisible();
    });

    test('devrait afficher une erreur avec des identifiants invalides', async ({ homePage, signupLoginPage }) => {
        await homePage.goto();
        await homePage.clickSignupLogin();
        await signupLoginPage.login('inexistant@example.com', 'mauvaisMdp123');

        await expect(signupLoginPage.loginErrorMessage).toBeVisible();
    });

    test('logout ', async ({ page, homePage, signupLoginPage }) => {
        await homePage.goto();
        await page.waitForTimeout(4000);
        await homePage.clickSignupLogin();
        await page.waitForTimeout(4000);
        await signupLoginPage.login(existingUser.email, existingUser.password);
        await page.waitForTimeout(4000);
        await signupLoginPage.clickLogout();
        await expect(page).toHaveURL(/\/login/);
    });

});