import { test, expect } from 'playwright/test';
test.only('special loc', async ({browser})=>{
    
    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator("//div[@class='form-group']//input[@name='name']").fill("testuser");
    await page.locator("//input[@name='email']").fill("testuser@email.com");
    await page.locator("//input[@id='exampleInputPassword1']").fill("abcd@123");
    await page.getByLabel("Check me out if you Love IceCreams!").scrollIntoViewIfNeeded();
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByLabel("Student").click();
    await page.getByRole("button",{name: "Submit"}).click();


      

});
    