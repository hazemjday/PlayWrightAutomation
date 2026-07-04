//the spec demo that are tests
const base = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const SignupLoginPage = require('../Pages/LoginPage');
const AccountPage = require('../pages/AccountPage');
const ContactUsPage = require('../pages/ContactUsPage');
const SignUpPage = require('../pages/SignupPage');
const { SearchPage } = require('../Pages/SearchPage');
const { CartPage } = require('../Pages/CartPage');
// ... tes autres imports de pages (ProductsPage, CartPage, etc.)

exports.test = base.test.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    signupLoginPage: async ({ page }, use) => {
        await use(new SignupLoginPage(page));
    },
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    },

    signUpPage: async ({page}, use) => {
        await use(new SignUpPage(page));
    },

    searchPage: async ({page}, use) => {
        await use(new SearchPage(page));
    },

    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },

    contactUsPage: async ({ page }, use) => {
        await use(new ContactUsPage(page));
    },
  // ... tes autres fixtures existantes
});

exports.expect = base.expect;