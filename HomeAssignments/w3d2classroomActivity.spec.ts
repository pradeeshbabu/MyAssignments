import test from "@playwright/test";

test('login to salesforce using advanced xpaths', async({page})=>{

    // 1. Navigate to the Salesforce login page
  await page.goto('https://login.salesforce.com/?locale=in');

  //  2. Username field using XPath with starts-with()
  await page.locator('//input[starts-with(@id,"user")]').fill('dilipkumar.rajendran@testleaf.com');

  // 3. Password field using XPath with contains()
  await page.locator('//input[contains(@name,"pw")]').fill('TestLeaf@2025');
// Login button using parent child 
await page.locator('//form[@id="login_form"]/input[@id="Login"]').click();
await page.waitForTimeout(2000);

})