const{test,expect}=require('playwright/test');
test.use({viewport:{width:1366,height:599}});
test("portal login page",async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.viewportSize({width:1366,height:599});
    const buffer=await page.screenshot();
    console.log(buffer.base64());
    await page.getByPlaceholder("Username").fill("Admin");
    await page.locator("//input[@type='password']").fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.screenshot({ path: 'tests/screenshots.png' ,fullpage:true});
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.waitForTimeout(5000);
    await page.getByAltText("profile picture").first().click();
    await page.locator("//*[text()='Logout']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})