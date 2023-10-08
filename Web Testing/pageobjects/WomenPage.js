const { By } = require('selenium-webdriver')
const Page = require('./Page')

class WomenPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	selectLanguageEl = By.css('')
	womanHeaderEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/h1')
	selectLanguageEl = By.css('')
	selectLanguageEl = By.css('')

	// page action
	async openPage() {
		await this.openUrl('/women.html')
	}
	/**
	 * @param {string} search
	 */
    async Process(search) {
		await this.driver.findElement(this.searchFormEl).sendKeys(search)
		await this.driver.findElement(this.searchButtonEl).click()
	}
    async getWomanHeaderText() {
		return await this.driver.findElement(this.womanHeaderEl).getText()
	}
}

module.exports = WomenPage