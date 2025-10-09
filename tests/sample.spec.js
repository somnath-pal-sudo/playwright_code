

const{test,expect}=require('playwright/test');
test("my first test",async function ({page}) {
    expect(10).toBe(10);
})
test("my second test",async function ({page}) {
    expect(10).toBe(10);
})
test("my third test",async function ({page}) {
    expect(10).toBe(102);
    expect("Somnath Pal").toContain("mukesh");
    expect(false).toBeFalsy()
    expect({name:"somnath"}).toEqual({name:"somnath"});
    expect("Somnath Pal".includes("pal")).toBeTruthy();  
})