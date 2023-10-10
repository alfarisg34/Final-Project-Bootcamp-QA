import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://ecommerce.tealiumdemo.com/women.html')
	page.waitForSelector('.welcome-msg')
	page.screenshot({ path: 'screenshots/06_women_page.png' })
	sleep(3)
}