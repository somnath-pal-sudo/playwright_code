const{test,expect}=require('playwright/test');
test("verify google title",async function ({page}) {
    await page.goto("https://www.google.com/");
    const url=page.url();
    console.log(url);
    await expect(page).toHaveTitle("Google");
})