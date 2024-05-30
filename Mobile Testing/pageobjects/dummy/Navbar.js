const { remote } = require("webdriverio")
const Page = require("./Page")

class Navbar extends Page {
	// initialization
	constructor (driver) {
		super(driver)
	}

	// element locators
	get homeNavBtn() { return this.driver.$('~Home') }
	get webviewNavBtn() { return this.driver.$('~Webview') }
	get loginNavBtn() { return this.driver.$('~Login') }
	get formsNavBtn() { return this.driver.$('~Forms') }
	get swipeNavBtn() { return this.driver.$('~Swipe') }
	get dragNavBtn() { return this.driver.$('~Drag') }
	
	// page actions
	async clickBtn(option){
		switch(option){
			case "home":
				await (await this.homeNavBtn).waitForDisplayed();
				await this.homeNavBtn.click()
				break	
			case "webview":
				await (await this.webviewNavBtn).waitForDisplayed()
				await this.webviewNavBtn.click()
				break	
			case "login":
				await (await this.loginNavBtn).waitForDisplayed()
				await this.loginNavBtn.click()
				break	
			case "forms":
				await (await this.formsNavBtn).waitForDisplayed()
				await this.formsNavBtn.click()
				break	
			case "swipe":
				await (await this.swipeNavBtn).waitForDisplayed()
				await this.swipeNavBtn.click()
				break	
			case "drag":
				await this.dragNavBtn.click()
				break	
		}
	}
}

module.exports = Navbar