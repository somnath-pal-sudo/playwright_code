const{test,expect}=require('playwright/test');
test("Handle Alert ops",async function({page}){

    await page.goto("https://the-internet.hackerearth.com/javascript_alerts");
    //for alert
    await page.locator("//button[@onclick='jsAlert()']").click();
    page.on("dialog", async dialog => {
        console.log(dialog.message());
        dialog.accept();
        expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
    });

});
    
        
    
    
