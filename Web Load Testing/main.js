import { browser } from 'k6/experimental/browser'

import login_protocol from './protocol-test/01_login_page.protocol.test.js'
import inventory_protocol from './protocol-test/02_inventory_page.protocol.test.js'
import register_protocol from './protocol-test/03_register_page.protocol.test.js'
import product_protocol from './protocol-test/04_product_page.protocol.test.js'
import cart_protocol from './protocol-test/05_cart_page.protocol.test.js'
import women_protocol from './protocol-test/06_women_page.protocol.test.js'
import men_protocol from './protocol-test/07_men_page.protocol.test.js'

import login_browser from './browser-test/01_login_page.browser.test.js'
import inventory_browser from './browser-test/02_inventory_page.browser.test.js'
import register_browser from './browser-test/03_register_page.browser.test.js'
import product_browser from './browser-test/04_product_page.browser.test.js'
import cart_browser from './browser-test/05_cart_page.browser.test.js'
import women_browser from './browser-test/06_women_page.browser.test.js'
import men_browser from './browser-test/07_men_page.browser.test.js'

export const options = {
	scenarios: {
		protocolBased: {
			exec: 'protocolBasedScript',
			executor: 'constant-vus',
			vus: 10,
			duration: '10s',
		},
		browserBased: {
			exec: 'browserBasedScript',
			executor: 'shared-iterations',
			options: {
				browser: {
					type: 'chromium'
				}
			}
		}
	}
}

export async function browserBasedScript () {
	const page = browser.newPage()

	try {
		await login_browser(page)
		await inventory_browser(page)
		await register_browser(page)
		await product_browser(page)
		await cart_browser(page)
		await women_browser(page)
		await men_browser(page)
	} finally {
		page.close()
	}
}

export function protocolBasedScript () {
	login_protocol()
	inventory_protocol()
	register_protocol()
	product_protocol()
	cart_protocol()
	women_protocol()
	men_protocol()
}