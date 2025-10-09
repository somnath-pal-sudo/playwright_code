const{test,expect}=require('playwright/test');
test("portal login page",async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.locator("//input[@type='password']").fill("admin123456");
    await page.getByRole('button', { name: 'Login' }).click();
    const errormsg=await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
    console.log("Error message is:"+errormsg);
    expect(errormsg).toBe("Invalid credentials");
    expect(errormsg).toBeTruthy;
    
})