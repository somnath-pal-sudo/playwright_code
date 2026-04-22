const { test, expect } = require('@playwright/test');

test('search for T-Shirts and verify Faded Short Sleeve T-shirts', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.getByRole('textbox', { name: 'Search' }).fill('T-Shirts');
  await page.getByRole('button', { name: '' }).click();
  // Verify the product is in the results
  const productHeading = page.locator('#center_column').getByRole('heading', { name: 'Faded Short Sleeve T-shirts' });
  await expect(productHeading).toHaveText(/Faded Short Sleeve T-shirts/);
});
// 