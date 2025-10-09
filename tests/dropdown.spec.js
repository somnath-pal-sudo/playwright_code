import { test, expect } from '@playwright/test'
test('test', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    let state=await page.$("#state");
    let options=await state.$$("option");
    for(let i=0;i<options.length;i++){
    let optiontext=await options[i].textContent();
    let ddstaus=false;
    console.log(optiontext);
    if(optiontext.includes("Gujarat")){
        ddstaus=true;
        await options[i].click();
        break;  
    }
    
}
expect(ddstaus).toBeTruthy();

    //await page.locator('#state').selectOption({label:"Maharashtra"});
    // await page.locator('#state').selectOption({value:"Gujarat"});
    // await page.locator('#state').selectOption({index:2});
    // await page.waitForTimeout(5000); 
    // expect (page.locator('#state').last()).toHaveText("Gujarat"); 

    

    });
//label,value,index for select option//
 
  