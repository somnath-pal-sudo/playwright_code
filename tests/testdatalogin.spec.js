const { test, expect } = require('playwright/test');

const testdata = JSON.parse(JSON.stringify(require("../testdata.json")));

test.describe("data driven testing", () => {
    for (const data of testdata) {
        test(`login to application with ${data.id}`, async ({ page }) => {
            await page.goto("https://freelance-learn-automation.vercel.app/login");
            await page.getByPlaceholder("Enter Email").fill(data.username);
            await page.getByPlaceholder("Enter Password").fill(data.password);
            //await page.locator("//button[text()='Login']").click();
            // await page.waitForLoadState('networkidle');
            // await expect(page.locator("text=Welcome to Freelance Learn Automation")).toBeVisible();
            // await page.screenshot({ path: `login-${data.username}.png`, fullPage: true });
            await page.pause();
        });
    }
});