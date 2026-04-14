import { test, expect } from 'playwright/test';
import {LoginPageNew} from '../Pages/LoginPageNew.ts';
import{DashboardPage} from'../Pages/DashboardPage.ts';
import {customtest} from '../Pages/test-base.ts';
import testDataRaw from '../utils/placeholderTestdata.json';
const dataset = JSON.parse(JSON.stringify(testDataRaw));

customtest.only('test e2e flow with test base func',async({browser,testDataForOrder}:any,testInfo)=>{

   if(testInfo.retry===2){
      testInfo.annotations.push({type:"retries",description:"this test is retrying for the first time"});
   }
   console.log(`Retry count: ${testInfo.retry}`);
   const context= await browser.newContext();
    const page= await context.newPage();
   const username=testDataForOrder.username;
   const password=testDataForOrder.password;
   const product_name=testDataForOrder.productName;
   const loginPageNew =new LoginPageNew(page);
   const dashboardpage=new DashboardPage(page)
   await loginPageNew.landingPageURL(page);
   await loginPageNew.validLogin(username, password);
   await loginPageNew.login_newpagetitle(page);
   await page.pause();
});

// for(const data of dataset){
//    test(`test e2e flow ${data.username}`, async ({browser})=>{
//    //await test.info ().annotations.push({type:"e2e",description:"this is e2e test"});
    
//     const context= await browser.newContext();
//     const page= await context.newPage();
//    const username=dataset.username;
//    const password=dataset.password;
//    const product_name=dataset.productName;
//    const loginPageNew =new LoginPageNew(page);
//    const dashboardpage=new DashboardPage(page)
//    await loginPageNew.landingPageURL(page);
//    await loginPageNew.validLogin(username, password);
//    await loginPageNew.login_newpagetitle(page);

   
//     //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
//    // await page.getByPlaceholder("email@example.com").fill("sampleapi@email.com");
//     //await page.getByPlaceholder("enter your passsword").fill("5QYw.6DQws8XFyS");
//     //await page.getByRole("button",{name:"Login"}).click();
    

//     await page.waitForLoadState('networkidle');
//     await context.storageState({path:'state.json'});

//     const  pagetitle= page.title();
//     console.log(pagetitle);
//     console.log(page.url());
//     page.waitForLoadState('networkidle');
    
//     await page.screenshot({path:"./utils/tmplt.png",fullPage:true});
//     //await page.locator(".card").first().waitFor();
//     //console.log(products);
//    //  const allcardstitle=await page.locator(".card-body b").allTextContents();
//    //  console.log(allcardstitle);
     
//    //  const allproductscount=await products.count();
//    //  console.log(allproductscount);
//    //  await page.locator(".card-body").filter({hasText:`${productname}`}).getByRole("button",{name:'Add To Cart'}).click();
//     //await page.pause();
//     // for(let i=0; i < allproductscount; i++)
//     //     {
//     //    if(await products.nth(i).locator("b").textContent()===productname)
//     //     {
//     //     await products.nth(i).locator("text= Add To Cart").click();
//     //     break;

//     //    }
//     // }
//     //    //await page.pause();
//        await dashboardpage.searchProduct(dataset.productName,page);
//        await dashboardpage.navigateTocart(page);



//        await page.locator("[routerlink='/dashboard/cart']").click();
//        await page.locator("div li").first().waitFor();
//        const productVisibility= await page.locator("h3:has-text('iphone 13 pro')").isVisible();
//        expect(productVisibility).toBeTruthy();
//        await page.locator("//button[text()='Checkout']").click();
//        const url=console.log( page.url());
//        const paymentmethod=await page.locator("//div[@class='payment__type payment__type--cc active']").isVisible();
//        expect(paymentmethod).toBeTruthy();
//        await page.locator("input[value='4542 9931 9292 2293']").fill("4542 9931 9292 2293");
//        await page.locator("//select[@class='input ddl'][1]").selectOption("01");
//        await page.locator("//select[@class='input ddl'][2]").selectOption("12");
//        await page.locator("//div[@class='payment__info']//div[3]//div[1]//input[1]").fill("testuser");
//        await page.locator("//input[@name='coupon']").fill("rahulshettyacademy");
//        await page.locator("//*[text()='Apply Coupon']").click();
//        await page.pause();
//        await page.getByPlaceholder("Select Country").pressSequentially("ind");
//        await page.getByRole("button",{name:'India'}).nth(1).click();
//     //    const dropdown=page.locator(".ta-results");
//     //    await dropdown.waitFor();
//     //    await dropdown.locator("button",{hasText: "India"}).first().click();
//     //    await page.pause();
//        await expect(page.locator("label[type='text']").first()).toHaveText("sampleapi@email.com");
//        await page.locator("//a[@class='btnn action__submit ng-star-inserted']").click();
   
    
// });
// }