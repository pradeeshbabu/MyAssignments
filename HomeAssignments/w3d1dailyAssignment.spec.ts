/* Write a Playwright script to perform the following actions on the Salesforce login page:
1. Navigate to the Salesforce login page.
2. Use different CSS selector strategies (ID, Class, Attribute) to locate the username and password fields.
3. Enter sample credentials into the username and password fields.
4. Click the login button using a CSS selector.
5. Verify that the login was successful by checking for a specific element on the landing page.

https://login.salesforce.com/?locale=in
Sample credentials :
Username:dilipkumar.rajendran@testleaf.com
Password: TestLeaf@2025 */

import test from "@playwright/test";
test('LogintoSalesforce', async({page})=>{

await page.goto('https://login.salesforce.com/?locale=in')
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('#Login').click();
await page.locator ('input[name="pw"]').fill('TestLeaf@2025');
await page.locator('#Login').click();
await page.waitForTimeout(2000);

})