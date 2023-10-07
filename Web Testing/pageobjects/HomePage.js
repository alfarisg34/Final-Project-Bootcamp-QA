const { By } = require('selenium-webdriver')
const Page = require('./Page')

class HomePage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	selectLanguageEl = By.css('#select-language')
	englishLanguageEl = By.xpath("//html[@id='top']//select[@id='select-language']/option[@value='https://ecommerce.tealiumdemo.com/customer/account/login/?___store=default&___from_store=default']")
	frenchLanguageEl = By.xpath("//html[@id='top']//select[@id='select-language']/option[@value='https://ecommerce.tealiumdemo.com/customer/account/login/?___store=french&___from_store=default']")
	germanLanguageEl = By.xpath("//html[@id='top']//select[@id='select-language']/option[@value='https://ecommerce.tealiumdemo.com/customer/account/login/?___store=german&___from_store=default']")

	welcomeMassageEl = By.css('.welcome-msg')
	tealiumLogoEl = By.css('.large')

	accountButtonEl = By.xpath("//html[@id='top']//header[@id='header']//div[@class='account-cart-wrapper']/a[@href='https://ecommerce.tealiumdemo.com/customer/account/']")
	myAccountButtonEl = By.css("//html[@id='top']//div[@id='header-account']//a[@title='My Account']")
	loginButtonEl = By.xpath("//html[@id='top']//div[@id='header-account']//a[@title='Log In']")
	cartButtonEl = By.css('.skip-cart')

	searchFormEl = By.css('#search')
	searchButtonEl = By.css('.button search-button')
	
	womenNavbarButtonEl = By.css('.level0.nav-1.first.parent')

	// page action
	async openPage() {
		await this.openUrl('/')
	}
	/**
	 * fungsi ini digunakan untuk melakukan search
	 * @param {string} search
	 */
	async searchProcess(search) {
		await this.driver.findElement(this.searchFormEl).sendKeys(search)
		await this.driver.findElement(this.searchButtonEl).click()
	}
	async changeLanguage(option) {
		switch(option){
			case "English":
				await this.driver.findElement(this.selectLanguageEl).click()
				await this.driver.findElement(this.englishLanguageEl).click()
				break
			case "French":
				await this.driver.findElement(this.selectLanguageEl).click()
				await this.driver.findElement(this.frenchLanguageEl).click()
				break
			case "German":
				await this.driver.findElement(this.selectLanguageEl).click()
				await this.driver.findElement(this.germanLanguageEl).click()
				break
		}
		await this.driver.findElement(this.searchFormEl).sendKeys(search)
		await this.driver.findElement(this.searchButtonEl).click()
	}
	async getWelcomeMassage() {
		return await this.driver.findElement(this.welcomeMassageEl).getText()
	}
	async clickAccountButton() {
		await this.driver.findElement(this.myAccountButtonEl).click()
	}
	async clickCartButton() {
		await this.driver.findElement(this.cartButtonEl).click()
	}
	async getLoginDropdownText() {
		await this.driver.findElement(this.myAccountButtonEl).getText()
	}
}

module.exports = HomePage