import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).click();
  await page.getByAltText('profile picture').first().click();
  //await page.getByRole('listitem').filter({ hasText: 'Naa tha' }).locator('i').click();
  await page.locator("//*[text()='About']").click();
  await page.getByText('Active Employees: ').click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.locator("//div[@role='rowgroup']//div[2]//div[1]//div[1]//div[1]//div[1]//label[1]//span[1]//i[1]").scrollIntoViewIfNeeded()
  await page.locator("//div[@role='rowgroup']//div[2]//div[1]//div[1]//div[1]//div[1]//label[1]//span[1]//i[1]").click();
 // await page.getByRole('row', { name: ' 0485 923629 423 233  ' }).locator('span i').click();
 await page.getByAltText('profile picture').scrollIntoViewIfNeeded()
 await page.getByAltText('profile picture').click();
 await page.locator("//*[text()='Logout']").click();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});