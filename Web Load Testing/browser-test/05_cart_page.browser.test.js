import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://ecommerce.tealiumdemo.com/checkout/cart/')
	page.waitForSelector('.welcome-msg')
	page.screenshot({ path: 'screenshots/05_cart_page.png' })
	sleep(3)
}