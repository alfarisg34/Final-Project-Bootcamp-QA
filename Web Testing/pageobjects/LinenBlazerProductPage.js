const { By } = require('selenium-webdriver')
const Page = require('./Page')

class HomePage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	linenHeaderEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[3]/div[1]/form/div[3]/div[1]/span')
	colorEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[3]/div[1]/form/div[3]/div[5]/dl/dd[1]/div/ul/li/a/span[1]/img')
	xsSizeEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[3]/div[1]/form/div[3]/div[5]/dl/dd[2]/div/ul/li[1]/a/span[1]')
	mSizeEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[3]/div[1]/form/div[3]/div[5]/dl/dd[2]/div/ul/li[2]/a/span[1]')
	lSizeEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[3]/div[1]/form/div[3]/div[5]/dl/dd[2]/div/ul/li[3]/a/span[1]')
	xlSizeEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[3]/div[1]/form/div[3]/div[5]/dl/dd[2]/div/ul/li[4]/a/span[1]')
	quantityEl = By.css('#qty')
	addToCartBtnEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[3]/div[1]/form/div[3]/div[6]/div[2]/div[2]/button')

	// page action
	async openPage() {
		await this.openUrl('/linen-blazer-590.html')
	}
	/**
	 * @param {string} search
	 */
	async addToCartProcess(size, qty) {
		await this.driver.findElement(this.colorEl).click()
		switch (size) {
			case "xs":
				await this.driver.findElement(this.xsSizeEl).click()
				break
			case "m":
				await this.driver.findElement(this.mSizeEl).click()
				break
			case "l":
				await this.driver.findElement(this.lSizeEl).click()
				break
			case "xl":
				await this.driver.findElement(this.xlSizeEl).click()
				break
		}
		await this.driver.findElement(this.quantityEl).clear()
		await this.driver.findElement(this.quantityEl).sendKeys(qty)
		await this.driver.findElement(this.addToCartBtnEl).click()
	}
	async getWelcomeMassage() {
		return await this.driver.findElement(this.welcomeMassageEl).getText()
	}
	async getLinenBlazerText() {
		return await this.driver.findElement(this.linenHeaderEl).getText()
	}
}

module.exports = HomePage