import{test,expect} from '@playwright/test';
const browserstacklivepage=require("../Pages/browserstacklivepage");
const browserstackhomepage=require("../Pages/browserstackhomepage");

test("browserstackhomepage testing", async function({page}){
    const blh=new browserstackhomepage(page);
    await page.goto("https://www.browserstack.com/");
    blh.bshomepageop();
    await page. screenshot({path:'home.png',fullPage:true});
    //await page.pause();
    const blp=new browserstacklivepage(page);
    await blp.bslivepageop();
    await page.pause();
    expect(page).toHaveURL("/*[contains(@href,'/try-live')]*/");
    await page. screenshot({path:'requestaccesspage.png',fullPage:true});

});