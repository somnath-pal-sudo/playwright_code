const{test,expect}=require('playwright/test');
test("Handle windows",async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(await page.url());
    const[newWindow]=await Promise.all([
     page.waitForEvent("popup"),
    page.locator("//*[@id='__next']/section[3]/div/div/div[1]/div/div[1]/a").click()
    ]);
    console.log(newWindow.url());
    
   

    });

        


    