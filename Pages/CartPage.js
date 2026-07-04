class CartPage {
    constructor(page) {
        this.page = page;
        this.cartRows = page.locator('tbody tr[id^="product-"]');
    }

    async getCartItems() {
        const rows = await this.cartRows.all();
        const items = [];
        for (const row of rows) {
        const name = await row.locator('.cart_description h4 a').textContent();
        const price = await row.locator('.cart_price p').textContent();
        const quantity = await row.locator('.cart_quantity button').textContent();
        const total = await row.locator('.cart_total_price').textContent();

        items.push({
            name: name.trim(),
            price: price.trim(),
            quantity: quantity.trim(),
            total: total.trim(),
        });
        }

        return items;
    }
}

module.exports = { CartPage };