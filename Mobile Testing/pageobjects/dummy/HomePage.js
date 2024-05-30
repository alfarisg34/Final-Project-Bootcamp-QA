const { remote } = require("webdriverio")
const Page = require("./Page")

class HomePage extends Page {
	// initialization
	constructor (driver) {
		super(driver)
	}

	// element locators
	get logo() { return this.driver.$('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]') }
	get webdriverioText() { return this.driver.$('//android.widget.TextView[@text="WEBDRIVER"]') }
	// get loginBtnEl() { return this.driver.$('') }
	// get loginBtnEl() { return this.driver.$('') }
	// get loginBtnEl() { return this.driver.$('') }
	// get loginBtnEl() { return this.driver.$('') }
	// get loginBtnEl() { return this.driver.$('') }
	// get loginBtnEl() { return this.driver.$('') }
	
	// page actions
	async verifyPage(){
		(await this.logo).waitForDisplayed();
	}
	async getWebdriverioText(){
		return (await this.webdriverioText).getText();
	}
}

module.exports = HomePage