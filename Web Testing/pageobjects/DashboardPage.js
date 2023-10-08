const { By } = require('selenium-webdriver')
const Page = require('./Page')

class DashboardPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	headerEl = By.css('.page-title')
	accountBtn = By.xpath('/html/body/div[2]/div/header/div/div[2]/div/a')
	logoutBtn = By.xpath('/html/body/div[2]/div/header/div/div[5]/div/ul/li[5]/a')

	// page action
	async openPage() {
		await this.openUrl('/customer/account/')
	}
	/**
	 * @param {string} search
	 */
    async logoutProcess() {
		await this.driver.findElement(this.accountBtn).click()
		await this.driver.findElement(this.logoutBtn).click()
	}
    async getHeaderText() {
		return await this.driver.findElement(this.headerEl).getText()
	}
}

module.exports = DashboardPage