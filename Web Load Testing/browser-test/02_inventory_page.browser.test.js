import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://ecommerce.tealiumdemo.com/')
	page.waitForSelector('.welcome-msg')
	page.screenshot({ path: 'screenshots/02_inventory_page.png' })
	sleep(3)
}