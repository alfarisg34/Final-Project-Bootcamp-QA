const { remote } = require("webdriverio")
const Page = require("./Page")

class LoginPage extends Page {
	// initialization
	constructor (driver) {
		super(driver)
	}

	// element locators
	get emailEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.widget.EditText') }
	get passwordEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.EditText') }
	get loginButtonEl() { return this.driver.$('android.widget.Button') }
	get alertLoginSuccessEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[3]/android.view.View') }
	
	// page actions
	async loginProcess (email, password) {
		await this.emailEl.setValue(email)
		await this.passwordEl.setValue(password)
		await this.loginButtonEl.click()
	}
	async getLoginText(){
		return await this.loginButtonEl.getText()
	}
	async getAlertLoginText(){
		const result = await this.alertLoginSuccessEl
		await result.waitForExist()
		return result.getText()
	}
	async clickOKButton(){
		await this.okButtonEl.click()
	}
}

module.exports = LoginPage