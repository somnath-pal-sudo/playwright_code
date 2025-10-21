import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
let page = null;
let context = null;
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  await context.clearCookies();
});

test.afterAll(async () => {
  await page.close();
});



    test("launch application",async ({})=>{
    await page.goto("https://www.amazon.in/");
    await page.waitForLoadState('load');
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

});
    test("login to application",async ({})=>{
    await page.getByLabel("Expand Account and Lists").click();
    await page.locator("text=Sign in").first().click();
    await page.locator("//*[@id='ap_email_login']").fill("pall.somnath2@gmail.com");
    await page.getByLabel("Continue").click();
    await page.locator("//*[@id='ap_password']").fill("Somnath@1992");
    await page.locator("//*[@id='signInSubmit']").click();
    //await expect(page.locator("//div[@class='a-section a-spacing-base auth-pagelet-container']//div[@class='a-box-inner a-alert-container']//div[1]")).toHaveText("Your password is incorrect");
});
