import { test, expect } from '@playwright/test';
test("test POST  api call with token and booking ID",async function({request}){
    const response=await request.post("https://restful-booker.herokuapp.com/auth", { headers: { "Content-Type": "application/json" }, data: { "username": "admin", "password": "password123" } });
    console.log(response.status());
    console.log(response.ok());
    console.log( response.json);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseData= await response.json();
    expect(responseData).not.toBeNull();
   const token=responseData.token;
   console.log("token is "  , token);



})