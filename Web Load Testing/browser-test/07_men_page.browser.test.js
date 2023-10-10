import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://ecommerce.tealiumdemo.com/men.html')
	page.waitForSelector('.welcome-msg')
	page.screenshot({ path: 'screenshots/07_men_page.png' })
	sleep(3)
}