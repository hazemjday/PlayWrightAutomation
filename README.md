# Playwright QA Project

This repository contains Playwright end-to-end tests for the automation exercise website.

## Project structure

- `Pages/` – Page Object Model classes for reusable page actions.
- `Fixtures/` – Playwright fixtures and shared test setup.
- `Tests/` – Playwright test files.
- `utils/` – shared test data and helper utilities.
- `playwright.config.js` – Playwright configuration.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run all tests:
   ```bash
   npx playwright test
   ```

3. Run a single test file:
   ```bash
   npx playwright test Tests/contactUs.spec.js
   ```

4. Run tests headed (with browser visible):
   ```bash
   npx playwright test --headed
   ```

## Useful commands

- `npx playwright test` – run tests
- `npx playwright test --headed` – run tests with browser UI
- `npx playwright show-report` – open the HTML report
- `npx playwright install` – install browser binaries

## Best practices

- Keep selectors stable by using `data-qa`, `data-testid`, or role-based locators.
- Prefer explicit waits like `await expect(locator).toBeVisible()` over `waitForTimeout()`.
- Use page object methods for reusable actions and avoid page-specific selectors in tests.
- Keep tests isolated: each test should set up its own state.

## Notes

- Add custom fixtures in `Fixtures/pageFixtures.js` as needed.
- Use `playwright-report/` and `test-results/` for generated test artifacts.
