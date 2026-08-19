/* Classroom 1: Write the typescript code to login to Leaftaps application using Playwright locators.
URL : https://leaftaps.com/opentaps/control/main
Username: democsr2
Password: crmsfa */

//Import the test from PlayWright
import test from '@playwright/test'
//launch browser using page fixture
test('login to the Leaftaps using playwright locators', async({page})=>{
//login to the url
await page.goto('https://leaftaps.com/opentaps/control/main')
//inspect the leaftaps text is visible or not
await page.getByText('Leaftaps Login', {exact:true}).isVisible()
//inspect username and give username
await page.getByLabel('Username', {exact:true}).fill('democsr2')
//inpect password and give password
await page.getByLabel('Password', {exact:true}).fill('crmsfa')
//inspect login button and click login
await page.getByRole('button', {name: 'Login'}).click()
//Wait
await page.waitForLoadState('domcontentloaded')
//after login, click on CRM/SFA link
await page.getByRole('link', {name: 'CRM/SFA'}).click()
//click on Leads menu
await page.getByRole('link', {name: 'Leads'}).click()
})