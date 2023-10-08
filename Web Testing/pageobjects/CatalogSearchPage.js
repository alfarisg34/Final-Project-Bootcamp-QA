const { By } = require('selenium-webdriver')
const Page = require('./Page')

class CatalogSearchPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	blazerTextEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/ul/li[1]/div/h2/a')
	noResultsTextEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[1]/p')

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
    async getBlazerText() {
		return await this.driver.findElement(this.blazerTextEl).getText()
	}
    async getNoResultText() {
		return await this.driver.findElement(this.noResultsTextEl).getText()
	}
}

module.exports = CatalogSearchPage