import { test, expect } from "@playwright/test";
//

test("test title",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    let t1:string= await page.title();
    console.log("title is->: ", t1);  
    
   await expect(page).toHaveTitle("Automation Testing Practiceeee")
    ;

})

    