const { test, expect } = require('../fixtures/pageFixtures');

test.describe('Home Page', () => {

    test('devrait ouvrir le site et avoir un titre contenant "Automation Exercise"', async ({ page, homePage }) => {
        await homePage.goto();
        await expect(page).toHaveTitle(/Automation Exercise/);
        
    });


    test('devrait afficher le header', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.mainMenu).toBeVisible();
    await expect(homePage.homeMenuLink).toBeVisible();
    await expect(homePage.productsMenuLink).toBeVisible();
    await expect(homePage.cartMenuLink).toBeVisible();
    await expect(homePage.signupLoginLink).toBeVisible();
    });

    

    test('devrait naviguer vers la page Products et vérifier l\'URL', async ({ page, homePage }) => {
    await homePage.goto();
    await homePage.clickProducts();
    await expect(page).toHaveURL(/\/products/);
    });
});