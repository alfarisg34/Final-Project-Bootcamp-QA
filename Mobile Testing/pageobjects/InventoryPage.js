const { remote } = require("webdriverio")
const Page = require("./Page")

class InventoryPage extends Page {
	// initialization
	constructor (driver) {
		super(driver)
	}

	// element locators
	get hamburgerBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View/android.widget.Button') }
	get logoutBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]/android.view.View[12]') }

	get cartBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.widget.Button') }
	get counterItemEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View') }
	get searchForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View/android.view.View/android.widget.EditText') }
	get searchBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View/android.view.View/android.widget.Button') }

	get mensNavbarBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.view.View/android.view.View[1]') }
	get personalNavbarBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.view.View/android.view.View[2]') }
	get technicalNavbarBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.view.View/android.view.View[3]') }

	get allProductEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[6]') }
	get productNameEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.widget.ListView/android.view.View[1]/android.view.View[2]/android.view.View[3]') }
	get addBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.widget.ListView/android.view.View[1]/android.view.View[2]/android.view.View[6]/android.widget.Button') }

	get allProductEl() { return this.driver.$('') }
	get allProductEl() { return this.driver.$('') }
	get allProductEl() { return this.driver.$('') }
	get allProductEl() { return this.driver.$('') }
	get allProductEl() { return this.driver.$('') }
	
	// page actions
	async searchProcess (search) {
		const result = await this.searchForm
		await result.waitForExist()
		await result.setValue(search)
		await this.searchBtn.click()
	}
	async logoutProcess () {
		await this.hamburgerBtn.click()
		await this.driver.touchPerform([
			{ action: "press", options: { x: 300, y: 300 } },
			{ action: "wait", options: { ms: 500 } },
			{ action: "moveTo", options: { x: 300, y: 66 } },
			{ action: "release" },
		]);
		await this.logoutBtn.click()
		await this.driver.pause(3000)
	}
	async addToCart () {
		const result = await this.addBtn
		await result.waitForExist()
		result.click()
	}
	async toCartPage () {
		await this.cartBtn.click()
	}
	async getAllProductText(){
		return await this.allProductEl.getText()
	}
	async getProductNameText(){
		const result = await this.productNameEl
		await result.waitForExist()
		return await result.getText()
	}
	async getCounterNum(){
		const result = await this.counterItemEl
		await result.waitForExist()
		return result.getText()
	}
}

module.exports = InventoryPage