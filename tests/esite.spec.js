const{test,expect}=require('playwright/test');
import mysql from 'mysql2/promise';
test.describe.configure({mode:'parallel'});
test("login to esite", async function({page}){
    
        await page.goto("https://www.amazon.in/ref=nav_logo");
        const pagetitle=await page.title();
        console.log("page title is verified successfully: "+ pagetitle);
        //await expect (page).toHaveTitle("Magimix UK - Food Processors, Coffee Machines, Blenders & More");
});

test("homepage product counts",async function({page})
        {
            await page.goto("https://www.amazon.in/ref=nav_logo");
            const navbarmenu=[];
            const navbaritems=page.locator("//*[@id='nav-xshop']//div//a[@class='nav-a  ']");
            console.log("total number of nav bar items:" + await navbaritems.count());
            for(let i=0;i<await navbaritems.count();i++){
                navbarmenu.push(await navbaritems.nth(i).textContent());

            }
            console.log("nav bar items are: "+ navbarmenu);
            const navindex=navbarmenu.findIndex(text=>text&&text.includes("Mobiles"))
            if(navindex!==-1){
                console.log("mobiles item is  present in the nav bar");
                await navbaritems.nth(navindex).click();
                expect(page).toHaveTitle(/Mobiles/);


            }else{
                console.log("mobiles item is not present in the nav bar");

            }
     
        });
        test("all products under mobile sections",async function({page}){
            await  page.goto("https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles");
            await page.waitForLoadState();
            const mobproduct=[];
            const allmobproducts=page.locator("//*[@class='spacious']//li//a");
            console.log("total number of mobile products are: "+ await allmobproducts.count());
            for(let j=0;j<await allmobproducts.count();j++){
                mobproduct.push (await allmobproducts.nth(j).textContent());
            }
            console.log("all mobile products are: "+ mobproduct);

            const mobindex=mobproduct.findIndex(text=>text&&text.includes("Mobiles & Accessories"));
            if(mobindex!==-1){
                console.log("Samsung mobile is present in the mobile products list");
                await allmobproducts.nth(mobindex).click();
                expect(page).toHaveURL("https://www.amazon.in/s/ref=mega_elec_s23_1_2_1_4?rh=i%3Aelectronics%2Cn%3A4363159031&ie=UTF8&bbn=976419031");
            }else{
                console.log("Samsung mobile is not present in the mobile products list");
            }
        });

       test("test buy an item flow", async function({page}){
        const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Somnathpal@1992',
        database: 'mysql'
        });
        //test.describe.configure({mode:'serial'});
        await page.goto("https://www.amazon.in/s/ref=mega_elec_s23_1_2_1_4?rh=i%3Aelectronics%2Cn%3A4363159031&ie=UTF8&bbn=976419031"); 
        await page.waitForLoadState();
        const item=[];
        const itemmenu=page.locator("//*[@class='a-section a-spacing-medium _octopus-search-result-card_style_apbSearchResultsContainer__bCqjb']//div[@class='_octopus-search-result-card_style_apbSearchResultItem__2-mx4']//div[@class='a-section a-spacing-base desktop-grid-content-view']");
        console.log("total number of items are: "+ await itemmenu.count());
        for(let k=0;k<await itemmenu.count();k++){
            item.push(await itemmenu.nth(k).textContent());
        }
        console.log("list of items are: "+ item);
        const itemindex=item.findIndex(text=>text&&text.includes("Samsung Galaxy A17 5G"));
        if(itemindex!==-1){
            console.log("SAMSUNG Galaxy A17 is present in the item list");
            
            await itemmenu.nth(itemindex).click();
            const newItem=await page.context().newPage();
            await newItem.goto("https://www.amazon.in/Samsung-Storage-Adapter-Corning-Gorilla/dp/B0FLJVZR6H/ref=lp_4363159031_1_6?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=P6Z41QJVEF7Q22A89XY0&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D");
            await newItem.waitForLoadState();
            //await page.waitForLoadState('networkidle');
            //const pmodel=page.locator("//*[@id='productTitle']").textContent();
            //const pmodel=await itemmenu.nth(itemindex).textContent();
            //const pname=await itemmenu.nth(itemindex).locator("//*[@id='titleSection']").textContent();
            //const id= new Date().getTime(); //using timestamp as unique id
            
            console.log("item title is verified successfully: "+ await newItem.title());
            expect(page).toHaveTitle("Samsung Galaxy A17 5G (Gray, 6GB RAM, 128GB Storage) | with Travel Adapter | 50 MP No Shake Camera | Gemini Live | Circle to Search | Super AMOLED | Corning Gorilla Glass Victus | 7.5mm Sleek | AI");
            async function insertdata(id, pname, pmodel, ptitle, scrapped_at_time) {
             const rows = 'INSERT INTO live_ui_data (id, pname, pmodel, ptitle, scrapped_at_time)VALUES (?, ?, ?, ?, ?)';
        
        //const rows= await connection.execute('SELECT * FROM live_ui_data');
        //return rows;
         connection.execute(rows, [ id, pname, pmodel, ptitle, scrapped_at_time ]);
        console.log(`Stored => ${id}: ${pname}:${pmodel}:${ptitle}:${scrapped_at_time}`);
        await connection.end();
        
        
        //
 
      }

            const pmodel= await newItem.locator("//*[text()=' Item model number ']//following-sibling::td").textContent();
            const pname=await newItem.locator("//div[@id='titleSection']//span[@id='productTitle']").textContent();
            const id=  new Date().getTime(); //using timestamp as unique id
            const ptitle=await newItem.title();
            const scrapped_at_time= new Date().toISOString().slice(0, 19).replace('T', ' ');
            console.log(`Scraped Data => ID: ${id}, Name: ${pname}, Model: ${pmodel},title: ${ptitle} Time: ${scrapped_at_time}`);
            await insertdata(id, pname, pmodel, ptitle, scrapped_at_time);
            //const ptitle=await newItem.title();
            //console.log("product title is: "+ ptitle);
            //await newItem.close();
        }else{
            console.log("SAMSUNG Galaxy A17 5G is not present in the item list");
        }
        
    
    });

            



