import { test, expect } from '@playwright/test';
test("test POST  api call with token and booking ID",async function({request}){
    const data= {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
};
    const response=await request.post("https://restful-booker.herokuapp.com/booking", { headers: { "Content-Type": "application/json" }, data: data });
    console.log(response.status());
    console.log(response.ok());
    const responsebody= await response.text();
    console.log(responsebody);
//     console.log( response.json);
//     expect(response.status()).toBe(200);
//     expect(response.ok()).toBeTruthy();
//     const responseData=response.json();
//     expect(responseData).not.toBeNull();
//    const token=responseData.token;
//    console.log(token);



})