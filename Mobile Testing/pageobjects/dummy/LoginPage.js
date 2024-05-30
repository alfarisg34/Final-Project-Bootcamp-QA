const { remote } = require("webdriverio")
const Page = require("./Page")

class LoginPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	get headerText() { return this.driver.$('//android.widget.TextView[@text="Login / Sign up Form"]') }
	get loginMenuBtn() { return this.driver.$('//android.view.ViewGroup[@content-desc="button-login-container"]/android.view.ViewGroup') }
	get signupMenuBtn() { return this.driver.$('//android.widget.TextView[@text="Sign up"]') }
	get inputEmail() { return this.driver.$('~input-email') }
	get inputPassword() { return this.driver.$('~input-password') }
	get loginBtn() { return this.driver.$('//android.widget.TextView[@text="LOGIN"]') }
	// get loginBtnEl() { return this.driver.$('') }
	// get loginBtnEl() { return this.driver.$('') }
	// get loginBtnEl() { return this.driver.$('') }

	// page actions
	async getHeaderText() {
		return await this.headerText.getText()
	}
	async processLogin(email,password) {
		await (await this.loginMenuBtn).click()
		(await this.inputEmail).setValue(email)
		(await this.inputPassword).setValue(password)
		(await this.loginBtn).click()
	}
}

module.exports = LoginPage