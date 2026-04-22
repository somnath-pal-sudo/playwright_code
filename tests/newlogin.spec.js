import{test,expect} from 'playwright/test';
//const newloginpage=require("../Pages/login_new.js");
const baseurl="http://www.automationpractice.pl/index.php";
test.describe.configure({mode:'parallel'});
test("login to automation practice website", async function({page}){
    //const nwl=new newloginpage();
    await page.goto(baseurl);
    //await page.waitForLoadState();
    const title= await page.title();
    console.log("title verified successfully: "+ title);
    await expect(page).toHaveTitle("My Shop");
});
test("check login functionality",async function({page}){
    await page.goto(baseurl);
    await page.locator("//*[@class='login']").click();
    // const buffer=await page.screenshot();
    //console.log(buffer.;
    const title=await page.title();
    console.log ("title after clicking on submit create:"+ title);
    await expect(page).toHaveTitle("Login - My Shop");
    const header=page.locator("//h3[normalize-space()='Create an account']");
    await expect(header).toHaveText("Create an account");
    await page.locator("//div[@class='form-group']//input[@id='email_create']").fill("pal.somnath2@gmail.com");
    await page.locator("//*[@id='SubmitCreate']").click();
    //await page.waitForLoadState();
    page.locator("//*[@class='radio-inline']//label//span//input[@id='id_gender1']").click();
    await page.locator("//div[@class='required form-group']//label[@for='customer_firstname']//..//preceding::input[@class='is_required validate form-control']").fill("Somnath");
    await page.locator("//div[@class='required form-group']//label[@for='customer_lastname']//..//preceding::input[@id='customer_lastname']").fill("Pall");
    await page.locator("//div[@class='required form-group']//label[@for='email']//..//preceding::input[@id='email']").fill("pal.somnath2@gmail.com")
    await page.locator("//div[@class='required password form-group']//label[@for='passwd']//..//preceding::input[@id='passwd']").fill("Somnath@1992");
     await page.selectOption("//select[@id='days']",'20');
     await page.selectOption("//select[@id='months']",'12');
     await page.selectOption("//select[@id='years']",'2025');
     await page.locator("//div[@class='submit clearfix']//button").click();

});

test('test home page product counts', {
annotation: {
type: 'count-check',
description: 'Verify the number of products and tabs on the home page',
},
}, async ({ page }) => {
await page.goto("http://www.automationpractice.pl/index.php");
await page.waitForLoadState();
const homepagetabs = page.locator("//*[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']/li");
const count = await homepagetabs.count();
console.log("total number of homepage tabs:" + count);
const tabTexts = [];
for (let i = 0; i < count; i++) {
    tabTexts.push(await homepagetabs.nth(i).textContent());
}
const womenTabIndex = tabTexts.findIndex(text => text && text.includes('Women'));
if (womenTabIndex !== -1) {
    console.log("Women tab is present in the homepage");
    await homepagetabs.nth(womenTabIndex).click();
}

await expect(page.locator("//span[@class='category-name']")).toHaveText('Women');
const productType=[];
const products=page.locator("//div[@id='subcategories']//ul");
const prodcount=await products.count();
for(let j=0;j<productType.legnth;j++){
    productType.push(await productType.nth(j).textContent());
}

console.log("list of product types under women category:"+ productType);
const topIndex=productType.findIndex(text=>text&&text.includes("TOPS"))
if(topIndex!==-1){
    console.log("TOPS product type is present under women category");
    await products.nth(topIndex).click();
}
const subproductType=[]
const subproduct=page.locator("//div[@id='subcategories']//ul//li");
const subprodcount=await subproduct.count();
console.log("total number of sub products under tops category:"+ subprodcount);
for(let k=0;k<subproductType.length;k++){
    subproductType.push(await subproductType.nth(k).textContent());
}
const tshirtsIndexs=subproductType.findIndex(text=>text&&text.textIncludes("t-shirts"));
if(tshirtsIndexs!==-1){
    console.log("T-SHIRTS sub product is present under TOPS category");
    await subproductType.nth(tshirtsIndexs).click();
}
//await expect(page.locator("//div[@class='cat_desc']//span[normalize-space()='T-shirts']")).toHaveText('T-shirts');
//page.locator("//ul[@class='product_list grid row']//div[@class='product-image-container']").click();
page.getByPlaceholder("Search").fill("Faded Short Sleeve T-shirts");
page.getByPlaceholder("Search").press("Enter");
expect(page.locator("//div[@id='left_column']")).toContainText("Top sellers");
const listofproducts = page.locator("//ul[@class='block_content products-block']//li");
const productCount = await listofproducts.count();
console.log("total number of products displayed under top sellers:" + productCount);
for (let i = 0; i < productCount; i++) {
    const productText = await listofproducts.nth(i).textContent();
    if (productText && productText.includes("Faded Short Sleeve T-shirts")) {
        await listofproducts.nth(i).locator("//a[normalize-space()='Faded Short Sleeve T-shirts']").click();
        await expect(page.locator("//h1[@itemprop='name']")).toHaveText("Faded Short Sleeve T-shirts");
        await expect(page.locator("//p[normalize-space()='This product is no longer in stock']")).toBeVisible();
        break;
    }
}
// ...
});
test("check all windowhandling",async function({page}){
    await page.goto("http://www.automationpractice.pl/index.php?id_product=1&controller=product");
    const allfooterlinks=page.locator("//p[@class='socialsharing_product list-inline no-print']//button");
         console.log("total number of footer links under product page:"+ await allfooterlinks.count());
for(let i=0;i<await allfooterlinks.count();i++){
    const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        allfooterlinks.nth(i).click()
    ]);
    console.log(newPage.url());
}
});


    


