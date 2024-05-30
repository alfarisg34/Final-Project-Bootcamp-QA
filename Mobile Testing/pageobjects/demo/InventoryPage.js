const { remote } = require("webdriverio")
const Page = require("./Page")

class InventoryPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	get backBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.widget.Button[1]') }
	get hamburgerBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.widget.Button') }
	get logoutBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]/android.view.View[12]') }

	get cartBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.widget.Button') }
	get counterItemEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View/android.view.View[2]/android.view.View/android.view.View') }
	get counterItemE2eEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View') }
	get searchForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View/android.view.View/android.widget.EditText') }
	get searchBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View/android.view.View/android.widget.Button') }

	get mensNavbarBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.view.View/android.view.View[1]') }
	get personalNavbarBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.view.View/android.view.View[2]') }
	get technicalNavbarBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.view.View/android.view.View[3]') }

	get allProductEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[6]') }
	get listBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[7]/android.widget.Button[1]') }
	get gridBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View[7]/android.widget.Button[2]') }
	get errorMsg() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.widget.ListView/android.view.View[1]/android.view.View') }
	get productNameEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.widget.ListView/android.view.View[1]/android.view.View[2]/android.view.View[3]') }
	get addBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.widget.ListView/android.view.View[1]/android.view.View[2]/android.view.View[6]/android.widget.Button') }

	// page actions
	async searchProcess(search) {
		const result = await this.searchForm
		await result.waitForExist()
		await result.setValue(search)
		await this.driver.pause(2000)
		const btn = await this.searchBtn
		await btn.click()
	}
	async logoutProcess() {
		const btn = await this.hamburgerBtn
		await btn.waitForExist()
		await btn.click()
		await this.driver.touchPerform([
			{ action: "press", options: { x: 300, y: 300 } },
			{ action: "wait", options: { ms: 500 } },
			{ action: "moveTo", options: { x: 300, y: 66 } },
			{ action: "release" },
		]);
		await this.logoutBtn.click()
		await this.driver.pause(3000)
	}
	async addToCart() {
		const result = await this.addBtn
		await result.waitForExist()
		result.click()
	}
	async toCartPage() {
		await this.cartBtn.click()
	}
	async getAllProductText() {
		const result = await this.allProductEl
		await result.waitForExist()
		return await result.getText()
	}
	async getProductNameText() {
		const result = await this.productNameEl
		await result.waitForExist()
		return await result.getText()
	}
	async getCounterNum() {
		const result = await this.counterItemEl
		await result.waitForExist()
		return result.getText()
	}
	async getCounterNumE2e() {
		const result = await this.counterItemE2eEl
		await result.waitForExist()
		return result.getText()
	}
	async clickGridBtn() {
		const result = await this.gridBtn
		await result.waitForExist()
		await result.click()
	}
	async clickListBtn() {
		const result = await this.listBtn
		await result.waitForExist()
		await result.click()
	}
	async clickBackBtn() {
		const result = await this.backBtn
		await result.waitForExist()
		await result.click()
		await this.driver.pause(8000)
	}
	async getErrMsg() {
		const result = await this.errorMsg
		await result.waitForExist()
		return result.getText()
	}
}

module.exports = InventoryPage