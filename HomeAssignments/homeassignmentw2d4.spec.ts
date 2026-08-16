/* Task: 
Your task is to launch two separate browser instances using Playwright: 
1. Load Red Bus in an Edge browser instance and verify the page title and URL. 
2. Load Flipkart in a Firefox browser instance and verify the page title and URL.  */
import {test} from '@playwright/test'
import { chromium, firefox } from 'playwright'
test ('open in Edge browser', async () => {
const browser1 = await chromium.launch({channel:'msedge', headless:false})
const context1 = await browser1.newContext()
const page1 = await context1.newPage()
await page1.goto('https://www.redbus.in/')
await page1.waitForTimeout(3000)
console.log(await page1.title())
console.log(page1.url())    
})
test ('open in Firefox browser', async () => {
const browser2 = await firefox.launch({headless:false})
const context2 = await browser2.newContext()
const page2 = await context2.newPage()
await page2.goto('https://www.flipkart.com/')
await page2.waitForTimeout(3000)
console.log(await page2.title())
console.log(page2.url())
await browser2.close()
})