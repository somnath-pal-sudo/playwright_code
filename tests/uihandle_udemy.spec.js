import { test, expect } from 'playwright/test';
// test('handle login function', async function ({ page }) {
//     await page.goto("https://google.com");
//     console.log(page.title());
//     await page.goto("

//     expect(page).toHaveTitle("Google");




// });
// test.only('test UI elements',async({browser})=>{
//     const context= await browser.newContext();
//     const page=await context.newPage();

//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     console.log(await page.title());
//     await page.locator("input#username").fill("rahulshettyacademy");
//     await page.locator("input#password").fill("abcdef");
//     await page.locator("input#signInBtn").click();
//     const errortext=await page.locator("[style*='block']").textContent();
//     console.log(errortext);
//     await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");



// });
// test.only("test multiple items in js", async ({page})=>
// {
//     //const context=browser.newContext();
//     //const page=context.newPage();https://rahulshettyacademy.com/loginpagePractise/");
//     await page.locator("input#username").fill("rahulshettyacademy");
//     await page.locator("input#password").fill("Learning@830$3mK2");
//     await page.locator("input#signInBtn").click();
//     await page.waitForLoadState("networkidle");
//      const allproduct= await page.locator(".card-body a").allTextContents();
//     console.log(allproduct);
//     //const firstproduct=await page.locator(".card-body a").first().textContent();
//     //const secondproduct=await page.locator(".card-body a").nth(1).textContent();
//     expect(await page.locator(".card-body a").first().textContent()).toEqual("iphone X");
//     expect(await page.locator(".card-body a").nth(1).textContent()).toEqual("Samsung Note 8");

// });

// test.only("test UI components",async ({page})=>{
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     await page.waitForLoadState();
//     await page.locator("input#username").fill("rahulshettyacademy");
//     await page.locator("input#password").fill("Learning@830$3mK2");
//     const dropdown= page.locator("select[class='form-control']");
//     dropdown.selectOption("Student");
//     const checkbox=page.locator("//input[@id='terms']");
//     checkbox.click();
//     await expect(page.locator("//input[@id='terms']")).toBeChecked();
//     const radiobtn=page.locator(".radiotextsty").last();
//     radiobtn.click();
//     await page.locator("#okayBtn").click();
//     console.log(await page.locator(".radiotextsty").last().isChecked());
//     await expect(page.locator(".radiotextsty").last()).toBeChecked();
//     await expect(page.locator(".blinkingText")).toHaveAttribute("class","blinkingText");
//     await page.locator("input#signInBtn").click();
//     await page.pause();

// });

test.only("test window handle",async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const doc= page.locator(".blinkingText");
    const [newPage]= await Promise.all([
        context.waitForEvent('page'),
        doc.click(),
    ])
    const text=await newPage.locator(".im-para.red").textContent();
    console.log(text);
    const arrayText=text.split("@");
    const domain=arrayText[1].split(" ")[0];
    console.log(domain);
    await page.locator("input#username").fill(domain);
    console.log(await page.locator("input#username").inputValue());

    });





