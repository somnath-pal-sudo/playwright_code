const{test,expect}=require('playwright/test');
test("Handle Alert ops",async function({page}){

    await page.goto("https://the-internet.hackerearth.com/javascript_alerts");
    //for alert
    await page.locator("//button[@onclick='jsConfirm()']").click();
    page.on("dialog window", async (dialog) => {
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("I am a JS Confirm");
        await dialog.accept();
        expect(page.locator("#result")).toHaveText("You clicked: Ok");

        

    });

        

});
    