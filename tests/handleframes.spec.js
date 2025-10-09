const{test,expect}=require('playwright/test');
test("Handle frames",async function({page}){
    page.goto("https://docs.oracle.com/javase/8/docs/api/");
    await page.frameLocator("#packageListFrame")
    await page.locator("//*[@name='packageListFrame']").click();
    const allframes= page.frames();
    console.log(allframes.length);
    for (const frame of allframes) {
        console.log(frame.url());
    }
    await page.pause();

   

    });

        


    