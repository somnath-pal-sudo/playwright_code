import { test, expect } from '@playwright/test';
test("test POST  api call with token and booking ID",async function({request}){

    const authdata = {
        username:"admin",
        password:"password123"
    }
    
    const response = await request.post("https://restful-booker.herokuapp.com/auth",{headers: { "Content-Type": "application/json" },data:authdata})
    const responsebody= await response.json();
    console.log(responsebody);
    console.log(response.status());
    console.log(response.ok());
    const token= responsebody.token;
     console.log("token is ",token);
    const responsepostdata={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    const postresponse=await request.post("https://restful-booker.herokuapp.com/booking", { headers: { "Content-Type": "application/json" , "Cookie": `token=${token}`}, data: responsepostdata });
    console.log(postresponse.status());
    console.log(postresponse.ok());
    const postresponsebody= await postresponse.json();
    console.log(postresponsebody)
    const bookingid= postresponsebody.bookingid;
    console.log("postresponsebodyid is " , postresponsebody.bookingid);

    const putdata = {
    firstname: "Somnath",
    lastname: "api",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01"
    },
    additionalneeds: "Breakfast"
  };

  const putResponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`
    },
    data: putdata
  });

  expect(putResponse.ok()).toBeTruthy();
  const putBody = await putResponse.json();
  console.log("Updated Booking Response:", putBody);

  const patchdata = {
    firstname: "Somnath",
    lastname: "api-1",
    totalprice: 1201,
    depositpaid: false,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2040-01-01"
    },
    additionalneeds: "Dinner"
  };
  const patchresponse = await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingid}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`
    },
    data: patchdata
  });
    expect(patchresponse.ok()).toBeTruthy();
  const patchBody = await patchresponse.json();
  console.log("Updated Booking Response:", patchBody);

  const deleteresponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`

    }
  });
    expect(deleteresponse.ok()).toBeTruthy();
  console.log("Delete response status:", deleteresponse.status());

        
});

    
    
    



    
    

    
