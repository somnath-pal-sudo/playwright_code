import { test, expect } from '@playwright/test';
test("test get api call",async function({request}){
    const response=await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.status());
    console.log(await response.ok());
    console.log(await response.json());
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const respjson=await response.json();
    const headers= response.headers();
    console.log(headers);
    const headersarray=response.headersArray();
    console.log(headersarray);
    expect(headers['content-type']).toBe("application/json; charset=utf-8");
    expect(headersarray[0].name).toBe("Date");
    expect(respjson.page).toBe(2);
    expect(respjson.data.length).toBe(6);
    const responseStatustext=response.statusText();
    console.log(responseStatustext);
    expect(responseStatustext).toBe("OK");
    const responseurl=response.url();
    console.log(responseurl);
    expect(responseurl).toBe("https://reqres.in/api/users?page=2");
    const start=Date.now();
    const response1=await request.get("https://reqres.in/api/users?page=2");
    const end=Date.now();
    const responsetime=end-start;
    console.log(responsetime);
    expect(responsetime).toBeLessThan(2000);

    const responseproperty=response.ok();
    console.log(responseproperty);




})