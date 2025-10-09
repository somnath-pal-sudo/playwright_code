const{test,expect}=require('playwright/test');
test("working with handle dynamic network calls",async function({page}){
     await page.goto("https://freelance-learn-automation.vercel.app/login")
     await page.locator("//a[contains(@href,'signup')]").click();
     await page.waitForLoadState('networkidle');
     const count=await page.locator("//input[@type='checkbox']").count();
     
     console.log(count);
     expect(count).toBe(5);    
    
    });

