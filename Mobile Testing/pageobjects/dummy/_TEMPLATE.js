const { remote } = require("webdriverio")
const Page = require("./Page")

class LoginPage extends Page {
	// initialization
	constructor (driver) {
		super(driver)
	}

	// element locators
	get loginBtnEl() { return this.driver.$('') }
	
	// page actions
	async loginProcess () {
		await this.usernameEl.setValue('bob@example.com')
		await this.passwordEl.setValue('10203040')
		await this.loginButtonEl.click()
	}
	async getHeaderText(){
		return await this.HeaderEl.getText()
	}
	async clickSkipBtn(){
		await this.skipBtnEl.click()
	}
}

module.exports = LoginPage