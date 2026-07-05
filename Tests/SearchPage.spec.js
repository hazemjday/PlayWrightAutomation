const { test, expect } = require('../Fixtures/pageFixtures');

    test.describe('Search', () => {

   test('chercher un produit', async ({ page, homePage, searchPage }) => {
    await homePage.goto();
    await searchPage.clickProduct();
    await searchPage.searchProduct('Grunt Blue Slim Fit Jeans');
    await page.waitForLoadState('networkidle'); // wait for search results page to fully load

    const names = await searchPage.getVisibleProductNames();
    expect(names.length).toBe(1);
    expect(names[0].trim()).toBe('Grunt Blue Slim Fit Jeans');
});

test('ajouter un produit', async ({ page, homePage, searchPage }) => {
    await homePage.goto();
    await searchPage.clickProduct();
    await searchPage.searchProduct('Grunt Blue Slim Fit Jeans'); // <-- this was missing
    await page.waitForLoadState('networkidle');

    await searchPage.addToCart('Grunt Blue Slim Fit Jeans');
    await expect(page.locator('#cartModal')).toBeVisible();
});

test('ajouter 2 jeans et blue top', async ({ page, homePage, searchPage, cartPage}) => {
    await homePage.goto();
    await searchPage.clickProduct();

    await page.screenshot({ path: 'debug-1-before-jeans.png', fullPage: true });
    await searchPage.searchProduct('Grunt Blue Slim Fit Jeans');
    await searchPage.addToCart('Grunt Blue Slim Fit Jeans');
    await page.screenshot({ path: 'debug-2-after-jeans-click.png', fullPage: true });

    await page.waitForTimeout(2000);
    await searchPage.continueShoppingBtn.click();
    await page.screenshot({ path: 'debug-3-after-continue-1.png', fullPage: true });
    await searchPage.searchProduct('Grunt Blue Slim Fit Jeans');
    await searchPage.addToCart('Grunt Blue Slim Fit Jeans');
    await page.screenshot({ path: 'debug-4-after-jeans-click-2.png', fullPage: true });

    await page.waitForTimeout(2000);
    await searchPage.continueShoppingBtn.click();
    await searchPage.searchProduct('Blue Top');
    await searchPage.addToCart('Blue Top');
    await page.screenshot({ path: 'debug-5-after-bluetop-click.png', fullPage: true });

    await searchPage.continueShoppingBtn.click();
    await searchPage.clickCart();
    await page.screenshot({ path: 'debug-6-cart-page.png', fullPage: true });

    const items = await cartPage.getCartItems();

    expect(items.length).toBe(2);

    const jeans = items.find(i => i.name === 'Grunt Blue Slim Fit Jeans');
    const blueTop = items.find(i => i.name === 'Blue Top');

    expect(jeans).toBeTruthy();
    expect(jeans.quantity).toBe('2');

    expect(blueTop).toBeTruthy();
    expect(blueTop.quantity).toBe('1');
});
    
});