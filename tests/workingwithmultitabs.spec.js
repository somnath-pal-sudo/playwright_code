const{test,expect}=require('playwright/test');
test("working with multi tabs",async function({browser}){
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const[newpage]= await Promise.all([
    context.waitForEvent("page"),
    page.locator("//*[contains(@href,'facebook.com')][1]").first().click()

        
    ])
    await newpage.waitForTimeout(2000);
    console.log(newpage.url());
    //console.log(newpage.title());
    await newpage.locator("//input[@id='_r_9_']").first().fill("pall.somnath2@gmail.com");
    await newpage.locator("//input[@id='_r_d_']").first().fill("Pallavi@123");
    await newpage.locator("//button[@id='loginbutton']").click()
    await newpage.waitForTimeout(5000);
    await newpage.screenshot({path:'facebook.png',fullPage:true});
    await page.bringToFront();

    });

        


    