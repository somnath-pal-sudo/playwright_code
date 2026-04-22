const {test,expect}=require("@playwright/test");
test("handle test", async ({browser})=>{
    const context=  await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState();
    // await expect( page.locator("#displayed-text")).toBeVisible();
    // await page.locator("#hide-textbox").click();
    // await expect(page.locator("#displayed-text")).toBeHidden();
    // page.locator("#name").fill("test");
    // page.on('dialog',dialog=> dialog.accept());
    // await page.locator("#confirmbtn").click();
    //await page.waitForSelector("#courses-iframe");
    const framepage= page.frameLocator("courses-iframe");
    await framepage.locator("//div//li//a[@class='new-navbar-highlighter'][normalize-space()='Learning paths']").click();





    








});