const { By } = require('selenium-webdriver')
const Page = require('./Page')

class LoginPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	loginHeaderEl = By.css('.page-title')
	selectLanguageEl = By.css('#select-language')

	// page action
	async openPage() {
		await this.openUrl('/')
	}
	/**
	 * @param {string} search
	 */
    async searchProcess(search) {
		await this.driver.findElement(this.searchFormEl).sendKeys(search)
		await this.driver.findElement(this.searchButtonEl).click()
	}
    async getHeaderLoginText() {
		return await this.driver.findElement(this.loginHeaderEl).getText()
	}
}

module.exports = LoginPage