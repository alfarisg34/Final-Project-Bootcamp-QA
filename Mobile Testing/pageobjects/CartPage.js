const { remote } = require("webdriverio")
const Page = require("./Page")

class CartPage extends Page {
	// initialization
	constructor (driver) {
		super(driver)
	}

	// element locators
	get headerEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[1]') }
	get itemNameEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[4]') }
	get dropdownBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View/android.view.View/android.view.View[8]/android.view.View[4]/android.view.View[2]') }
	get timeOneEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[4]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View') }
	get closeBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View/android.widget.Button[2]') }
	get checkoutBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View/android.view.View/android.widget.Button') }
	
	get intructionTextEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View/android.view.View/android.view.View[1]') }
	get codBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View/android.view.View/android.view.View[8]/android.view.View[3]/android.view.View/android.view.View') }
	get placeOrderBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View/android.view.View/android.widget.Button') }
	get okBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[5]/android.view.View/android.widget.Button[2]') }
	
	get confirmBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[4]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.widget.Button[2]') }
	get successEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View/android.view.View/android.view.View[1]') }
	get templateEl() { return this.driver.$('') }
	
	// page actions
	async checkoutProcessOne () {
		await this.driver.touchPerform([
			{ action: "press", options: { x: 300, y: 975 } },
			{ action: "wait", options: { ms: 500 } },
			{ action: "moveTo", options: { x: 300, y: 775 } },
			{ action: "release" },
		]);
		await this.dropdownBtn.click()
		await this.driver.pause(500)
		await this.timeOneEl.click()
		await this.driver.pause(500)
		var btn = await this.checkoutBtn
		await btn.waitForExist()
		await btn.click()
	}
	async checkoutProcessTwo () {
		await this.driver.touchPerform([
			{ action: "press", options: { x: 300, y: 1000 } },
			{ action: "wait", options: { ms: 500 } },
			{ action: "moveTo", options: { x: 300, y: 500 } },
			{ action: "release" },
		]);
		await this.codBtn.click()
		await this.driver.pause(500)
		var btn = await this.placeOrderBtn
		await btn.waitForExist()
		await btn.click()
		await this.driver.pause(500)
		var btn = await this.okBtn
		await btn.waitForExist()
		await btn.click()
		await this.driver.pause(500)
		var btn = await this.confirmBtn
		await btn.waitForExist()
		await btn.click()
		await this.driver.pause(5000)
	}
	async getHeaderText(){
		const result = await this.headerEl
		await result.waitForExist()
		return result.getText()
	}
	async getItemNameText(){
		const result = await this.itemNameEl
		await result.waitForExist()
		return result.getText()
	}
	async getSuccessText(){
		const result = await this.successEl
		await result.waitForExist()
		return result.getText()
	}
	async clickSkipBtn(){
		await this.skipBtnEl.click()
	}
	async getIntructionText(){
		const result = await this.intructionTextEl
		await result.waitForExist()
		return result.getText()
	}
}

module.exports = CartPage