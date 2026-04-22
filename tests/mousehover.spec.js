const{test,expect}=require('playwright/test');
//test.use({viewport:{width:1366,height:599}});
test("mouse hover actions",async function ({page}) 
      {
        await page.goto("https://freelance-learn-automation.vercel.app/login");
        await page.getByPlaceholder("Enter Email").fill("admin@email.com"); 
        await page.getByPlaceholder("Enter Password").fill("admin@123");
        await page.getByRole("button", { name: 'Sign in'}).click();
        await page.waitForTimeout(5000);
        expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/");
        await page.locator("//span[normalize-space()='Manage']").hover({force:true});
        await page.getByAltText("manage course").click();
        expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/course/manage");
        await page.waitForTimeout(5000);
        

        });