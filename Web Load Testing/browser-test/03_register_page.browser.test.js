import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://ecommerce.tealiumdemo.com/customer/account/create/')
	page.waitForSelector('.welcome-msg')
	page.screenshot({ path: 'screenshots/03_register_page.png' })
	sleep(3)
}