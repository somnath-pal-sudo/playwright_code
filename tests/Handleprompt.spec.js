const{test,expect}=require('playwright/test');
test("Handle Alert ops",async function({page}){

    await page.goto("https://the-internet.hackerearth.com/javascript_alerts");
    //for alert
    await page.locator("//button[@onclick='jsPrompt()']").click();
    page.on("dialog window", async (dialog) => {
        expect(dialog.type()).toContain("Prompt");
        expect(dialog.message()).toContain("Click for JS Prompt");
        await dialog.accept("I am a visual prompt");
        expect(page.locator("#result")).toHaveText("I am a visual prompt");

        

    });

        

});
    