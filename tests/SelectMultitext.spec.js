import { test, expect } from '@playwright/test'
test('test', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.locator("#hobbies").selectOption(['Playing','Reading']);
    await page.waitForTimeout(5000);
    expect(page.locator("//*[@id='hobbies']").first());
}); 

