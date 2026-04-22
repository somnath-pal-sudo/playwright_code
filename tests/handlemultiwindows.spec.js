const{test,expect}=require('playwright/test');
test("Handle multi windows",async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(await page.url());
    const[multiWindow]=await Promise.all([
     page.waitForEvent("popup"),
    page.locator("//*[@id='followall']").click()
    ]);
    await multiWindow.waitForLoadState();
    const pages=multiWindow.context().pages();
    console.log(pages.length);
    pages.forEach(tab=>{
        console.log(tab.url(), tab.title());
    })
    if(pages.length>1){
        await pages[1].bringToFront();
        await pages[1].waitForLoadState();
        console.log("2nd tab title: "+await pages[1].title());
        await pages[1].close();
        await page.bringToFront();
        console.log("Main page title: "+await page.title());
    }
    //console.log(newWindow.url());
    
   

    });

        


    