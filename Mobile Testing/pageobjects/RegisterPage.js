const { remote } = require("webdriverio")
const Page = require("./Page")

class RegisterPage extends Page {
	// initialization
	constructor (driver) {
		super(driver)
	}

	// element locators
	get logoEl() { return this.driver.$('android.widget.Image') }

	get selectAreaForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View') }
	get area1Form() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[4]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View') }
	get closeForm() { return this.driver.$('android.widget.Button') }
	get fullNameForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.widget.EditText') }
	get mobileForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[5]/android.widget.EditText') }
	get emailForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[7]/android.widget.EditText') }
	get passwordForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[9]/android.widget.EditText') }
	get confirmationForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[11]/android.widget.EditText') }
	get registerBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]') }
	get backBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]') }
	
	// page actions
	async registerProcess () {
		await this.selectAreaForm.click()
		await this.driver.pause(500)
		await this.area1Form.click()
		await this.closeForm.click()
		await this.driver.pause(500)
		await this.fullNameForm.setValue('Rebecca Winter')
		await this.mobileForm.setValue('081208120812')
		await this.emailForm.setValue('rebeca@mail.com')
		await this.passwordForm.setValue('12345678')
		await this.confirmationForm.setValue('12345678')
		await this.driver.touchPerform([
			{ action: "press", options: { x: 106, y: 1142 } },
			{ action: "wait", options: { ms: 500 } },
			{ action: "release" },
		]);
		await this.driver.pause(500)
		await this.registerBtn.click()
	}
	async getHeaderText(){
		return await this.logoEl.getText()
	}
	async clickSkipBtn(){
		await this.skipBtnEl.click()
	}
}

module.exports = RegisterPage