import{expect,test} from '@playwright/test';
import fs from 'fs';

test("test post call with JSON file", async function({request}){
   const file= fs.readFileSync("createbooking.json","utf-8");
   const booking=JSON.parse(file);
    console.log(booking);
    const response=await request.post("https://restful-booker.herokuapp.com/booking", {
        data:booking,
        headers: { "Content-Type": "application/json" }
    })
    const responsejson=await response.json();
    console.log(responsejson);
    console.log(response.status());
    console.log(response.ok());
    });

            
            
