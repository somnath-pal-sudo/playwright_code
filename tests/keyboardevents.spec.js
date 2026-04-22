const{test,expect}=require('playwright/test');
//test.use({viewport:{width:1366,height:599}});
test("keyboard events actions",async function ({page}) 
      {
        await page.goto("https://www.google.com/");
        
        await page.locator("//*[@name='q']").fill("playwright");
        await page.keyboard.press("Enter");
        await page.waitForTimeout(5000);
        expect(page).toHaveURL(/.*playwright.*/);
        for(let i=0;i<3;i++){
            await page.keyboard.press("Tab");
            await page.waitForTimeout(2000);

        }
        await page.keyboard.press("Enter");
        await page.waitForTimeout(5000);
       // expect(page).toHaveURL("https://playwright.dev/");


});