import {test,expect} from '@playwright/test';

test("test calender", async ({browser})=>{
   const context= await browser.newContext();
   const page=  await context.newPage();

   const day="10";
   const month="07";
   const year="2021";
   const expectedlist=[day,month,year];
   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
   await page.waitForLoadState();
   await page.locator(".react-date-picker__inputGroup").click();
   await page.locator(".react-calendar__navigation__label").click();
   await page.locator(".react-calendar__navigation__label").click();
   await page.getByText(year).nth(1).click();
   await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click();
   await page.locator("//abbr[text()='"+day+"']").click();

   const input= page.locator(".react-date-picker__inputGroup__input");
   for(let i=0;i<expectedlist.length;i++){
      const values=await input.nth(i).inputValue();
      expect(values).toEqual(expectedlist[i]);
   }








});