import { test, expect} from '@playwright/test';

//import{globalsetup,globalteardown} from '@playwright/test';
// test.describe.configure({mode:'serial'});
// let page=null;
// let context=null;
// test.beforeAll(async({browser})=>{
//   context=await browser.newContext();
//   page=await context.newPage();
//   await context.clearCookies();
// });

// test.afterAll(async()=>{
//   await page.close();
// });
test("launch browser and verify title",async({page})=>{
    //console.log("launching browser");
    await page.goto(baseurl);
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");



//await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");;
});