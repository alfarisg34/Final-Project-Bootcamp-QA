const { By } = require('selenium-webdriver')
const Page = require('./Page')

class CheckoutPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	headerEl = By.xpath('/html/body/div[2]/div/div[2]/div/div/div[2]/div[1]/h1')
	headerCartEmptyEl = By.xpath('/html/body/div[2]/div/div[2]/div/div/div[2]/h1')
	checkoutBtnEl = By.xpath('/html/body/div[2]/div/div[2]/div/div/div[2]/div[1]/ul/li/button')

	continueBtnEl = By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/ol/li[1]/div[2]/div/div[1]/div/button')
	
	formFirstName = By.id('billing:firstname')
	formLastName = By.id('billing:lastname')
	formEmail = By.id('billing:email')
	formAdress = By.id('billing:street1')
	formCity = By.id('billing:city')
	formCountry = By.css('select[name="billing[region_id]"] option[value="43"]')
	formZip = By.id('billing:postcode')
	formTelephone = By.id('billing:telephone')
	formContinue = By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/ol/li[2]/div[2]/form/div/div/button/span')
	
	formShipping = By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/ol/li[4]/div[2]/form/div[1]/dl/dd[2]/ul/li/label')
	formContinue3 = By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/ol/li[4]/div[2]/form/div[3]/button')

	formContinue4 = By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/ol/li[5]/div[2]/div[2]/button')

	formPlaceOrder = By.xpath('/html/body/div[2]/div/div[2]/div/div[1]/ol/li[6]/div[2]/div[2]/div[2]/div/button')

	thankYouTextEl = By.xpath('/html/body/div[2]/div/div[2]/div/div/h2')

	// page action
	async openPage() {
		await this.openUrl('/checkout')
	}
	/**
	 * @param {string} search
	 */
    async inputFormProcess() {
		await this.driver.findElement(this.formFirstName).sendKeys("Elon")
		await this.driver.findElement(this.formLastName).sendKeys("Musk")
		await this.driver.findElement(this.formEmail).sendKeys("Elon@musk.com")
		await this.driver.findElement(this.formAdress).sendKeys("Long street")
		await this.driver.findElement(this.formCity).sendKeys("NY")
		await this.driver.findElement(this.formCountry).click()
		await this.driver.findElement(this.formZip).sendKeys("65656")
		await this.driver.findElement(this.formTelephone).sendKeys("081208120812")
		await this.driver.executeScript(function(){
			document.querySelector('html').scrollBy({top:1000,behavior:'smooth'})
		})
		await this.driver.sleep(1000)
		await this.driver.findElement(this.formContinue).click()
		await this.driver.sleep(1000)
		await this.driver.findElement(this.formShipping).click()
		await this.driver.sleep(1000)
		await this.driver.findElement(this.formContinue3).click()
		await this.driver.sleep(1000)
		await this.driver.findElement(this.formContinue4).click()
		await this.driver.sleep(1000)
		await this.driver.executeScript(function(){
			document.querySelector('html').scrollBy({top:1000,behavior:'smooth'})
		})
		await this.driver.sleep(1000)
		await this.driver.findElement(this.formPlaceOrder).click()

	}
    async checkoutClick() {
		await this.driver.findElement(this.checkoutBtnEl).click()
	}
    async continueClick() {
		await this.driver.findElement(this.continueBtnEl).click()
	}
    async continue2Click() {
		await this.driver.findElement(this.formContinue).click()
	}
    async getHeaderText() {
		return await this.driver.findElement(this.headerEl).getText()
	}
    async getEmptyHeaderText() {
		return await this.driver.findElement(this.headerCartEmptyEl).getText()
	}
    async getThankYouText() {
		return await this.driver.findElement(this.thankYouTextEl).getText()
	}
}

module.exports = CheckoutPage