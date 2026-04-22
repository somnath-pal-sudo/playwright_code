const{test,expect}=require('playwright/test');
//test.use({viewport:{width:1366,height:599}});
test("File upload actions",async function ({page}) 
      {
        await page.goto("https://the-internet.herokuapp.com/upload");
        await page.locator("#file-upload").setInputFiles("C:/Users/psomn/Pictures/GoogleLabs_Complete.png");
        await page.locator("//*[@id='file-submit']").first().click();
        const msg=await page.locator("//h3").textContent();
        console.log("File upload message is:"+msg);
        expect(msg).toBe("File Uploaded!");
        await page.waitForTimeout(5000);
});