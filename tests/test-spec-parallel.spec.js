import {test,expect} from 'playwright/test';
test.describe.configure({mode:'searial'});
test.describe('test suite for serial execution 1',()=>{

    test(' @web test1',async({page})=>{
        await page.goto("https://www.amazon.in/");
        console.log("test1 executed successfully");
    });
});

test.describe('@web test suite for serial execution 2',()=>{
    test('test2 in serial 2', async({page})=>{

        await page("https://www.google.com/");


    })
});

test.describe('test suite for serial execution 2',()=>{
    test('test2 in serial 3', async({page})=>{

        await page.goto("https://www.ebay.com/");


    })
});

