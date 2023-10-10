import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://ecommerce.tealiumdemo.com/customer/account/login/')
	page.waitForSelector('.welcome-msg')
	page.screenshot({ path: 'screenshots/01_login_page.png' })
	sleep(3)
}