class SearchPage {

    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('#search_product');
        this.submitButton = page.locator('#submit_search');
        this.productOverlays = page.locator('.product-overlay');
        this.productNames = page.locator('.product-overlay .overlay-content p');
        this.products = page.getByRole('link', { name: 'Products' });
        this.cart = page.getByRole('link', { name: ' Cart' });
        this.continueShoppingBtn = page.locator('button.close-modal[data-dismiss="modal"]');
    }


    async clickProduct() {
        await this.products.click();
    }

    async clickCart() {
        await this.cart.click();
    }


    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.submitButton.click();
    }

    async getVisibleProductNames() {
        return this.productNames.allTextContents();
    }


    async addToCart(productName) {
    const productWrapper = this.page
        .locator('.product-image-wrapper')
        .filter({ has: this.page.locator('.productinfo p', { hasText: productName }) });

    await productWrapper.scrollIntoViewIfNeeded();
    await productWrapper.hover();
    const addToCartBtn = productWrapper.locator('.product-overlay .add-to-cart');
    await addToCartBtn.waitFor({ state: 'visible' });
    // Let the CSS hover transition finish before clicking
    await this.page.waitForTimeout(1000);   
    await addToCartBtn.click({ force: true });
    await this.continueShoppingBtn.waitFor({ state: 'visible' });
    }



    async addToCartMultiple(productName, quantity) {
    for (let i = 0; i < quantity; i++) {
        await this.addToCart(productName);
        await this.continueShoppingBtn.click();
    }
    }

}

module.exports = { SearchPage };