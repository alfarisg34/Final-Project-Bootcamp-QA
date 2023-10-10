import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://ecommerce.tealiumdemo.com/linen-blazer-590.html')
	page.waitForSelector('.welcome-msg')
	page.screenshot({ path: 'screenshots/04_product_page.png' })
	sleep(3)
}