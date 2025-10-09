const{test,expect}=require('playwright/test');
test("Handle Auto Complete Dropdown",async function({page}){
    await page.goto("https://www.google.com/");
    await page.locator("//*[@name='q']").fill("playwright")
    await page.waitForSelector("//li[@role='presentation']")
    const element=await page.$$("//li[@role='presentation']");
    for(let i=0;i<element.length;i++){
        let text=element[i].textContent();
        console.log(text);
        if(text==="playwright"){
            await element[i].click();
            break;
        }
    }
    

        
});
    

