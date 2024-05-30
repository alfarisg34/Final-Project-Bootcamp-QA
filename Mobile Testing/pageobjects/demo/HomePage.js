const { remote } = require("webdriverio")
const Page = require("./Page")

class HomePage extends Page {
	// initialization
	constructor (driver) {
		super(driver)
	}

	// element locators
	get allowBtnEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]') }
	
	get loginBtnEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[2]/android.widget.Button') }
	get registerBtnEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[3]/android.widget.Button') }
	get skipBtnEl() { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[5]/android.widget.Button') }
	
	// page actions
	async loginProcess () {
		await this.usernameEl.setValue('bob@example.com')
		await this.passwordEl.setValue('10203040')
		await this.loginButtonEl.click()
	}
	async clickAllowBtn () {
		const result = await this.allowBtnEl
		await result.waitForExist()
		await result.click()
	}
	async clickBtn(option){
		switch(option){
			case "login":
				await this.loginBtnEl.click()
				break	
			case "register":
				await this.registerBtnEl.click()
				break	
			case "skip":
				await this.skipBtnEl.click()
				break	
		}
	}
}

module.exports = HomePage