const { remote } = require("webdriverio")
const Page = require("./Page")

class RegisterPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	get logoEl() { return this.driver.$('android.widget.Image') }
	get alertEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View') }

	get selectAreaForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View') }
	get selectAreaFormRequired() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]') }
	get area1Form() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[4]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View') }
	get closeForm() { return this.driver.$('android.widget.Button') }
	get fullNameForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.EditText') }
	get fullNameFormRequired() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[4]') }
	get mobileForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.widget.EditText') }
	get mobileFormLength() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[4]') }
	get mobileFormRequired() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[6]') }
	get emailForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[4]/android.widget.EditText') }
	get emailFormInvalid() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[7]') }
	get emailFormRequired() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[8]') }
	get emailFormExist() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[5]') }
	get passwordForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[5]/android.widget.EditText') }
	get passwordFormRequired() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[10]') }
	get confirmationForm() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[6]/android.widget.EditText') }
	get confirmationFormNotMatch() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[10]') }
	get confirmationFormRequired() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[12]') }
	get registerBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]') }
	get backBtn() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]') }
	get agreeBtn() { return this.driver.$('android.widget.RadioButton') }
	get agreeMsg() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View') }

	// page actions
	async registerProcess(fullName, mobile, email, password, confirmation,agree, rgsBtn) {
		await this.selectAreaForm.click()
		await this.driver.pause(500)
		await this.area1Form.click()
		await this.driver.pause(500)
		await this.fullNameForm.setValue(fullName)
		await this.mobileForm.setValue(mobile)
		await this.emailForm.setValue(email)
		await this.passwordForm.setValue(password)
		await this.confirmationForm.setValue(confirmation)
		switch (agree){
			case true:
				await this.agreeBtn.click()
				break
			case false:
				break
		}
		switch (rgsBtn){
			case true:
				await this.registerBtn.click()
				break
			case false:
				break
		}
	}
	async getHeaderText() {
		return await this.logoEl.getText()
	}
	async getErrorForm(option) {
		switch (option) {
			case "fullNameReq":
				var result = await this.fullNameFormRequired
				await result.waitForExist()
				return result.getText()
			case "mobileRequired":
				var result = await this.mobileFormRequired
				await result.waitForExist()
				return result.getText()
			case "mobileLength":
				var result = await this.mobileFormLength
				await result.waitForExist()
				return result.getText()
			case "emailRequired":
				var result = await this.emailFormRequired
				await result.waitForExist()
				return result.getText()
			case "emailInvalid":
				var result = await this.emailFormInvalid
				await result.waitForExist()
				return result.getText()
			case "emailExist":
				var result = await this.emailFormExist
				await result.waitForExist()
				return result.getText()
			case "passRequired":
				var result = await this.passwordFormRequired
				await result.waitForExist()
				return result.getText()
			case "confirmRequired":
				var result = await this.confirmationFormRequired
				await result.waitForExist()
				return result.getText()
			case "confirmNotMatch":
				var result = await this.confirmationFormNotMatch
				await result.waitForExist()
				return result.getText()
		}
	}
	async clearFormAndInput(option, input) {
		switch (option) {
			case "fullName":
				var result = await this.fullNameForm
				await result.waitForExist()
				await result.setValue('')
				await result.setValue(input)
				break
			case "mobile":
				var result = await this.mobileForm
				await result.waitForExist()
				await result.setValue('')
				await result.setValue(input)
				break
			case "email":
				var result = await this.emailForm
				await result.waitForExist()
				await result.setValue('')
				await result.setValue(input)
				break
			case "password":
				var result = await this.passwordForm
				await result.waitForExist()
				await result.setValue('')
				await result.setValue(input)
				break
			case "confirmation":
				var result = await this.confirmationForm
				await result.waitForExist()
				await result.setValue('')
				await result.setValue(input)
				break
		}
	}
	async getAlertText() {
		const result = await this.alertEl
		await result.waitForExist()
		return result.getText()
	}
	async clickBackBtn() {
		await this.backBtn.click()
	}
	async enableRegisterBtn() {
		const result = await this.registerBtn
		await result.waitForExist()
		return result.isEnabled()
	}
}

module.exports = RegisterPage