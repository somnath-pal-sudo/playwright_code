import { test, expect } from 'playwright/test';
test.only('handle dynamic table', async ({browser})=>{
    
    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("sampleapi@email.com");
    await page.locator("#userPassword").fill("5QYw.6DQws8XFyS");
    await page.locator("#login").click();
    await page.locator("//button[@routerlink='/dashboard/myorders']").click();
    const orderid="699c7ddadd50d57c7dcf6f92";
    const rows= await page.locator("tbody tr");
    await page.pause();
    for(let i=0;i<await rows.count();i++)
        {
        const roworderid=await rows.nth(i).locator("th").textContent();
        if(orderid.includes(roworderid)){
            await rows.nth(i).locator("button").first().click();
            break;



        }

      }
      const url=  page.url();
      console.log(url);
      await expect( page.locator("//*[@class='email-container']//*[text()=' order summary ']")).toHaveText("order summary")



});
    