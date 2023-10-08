const { By } = require('selenium-webdriver')
const Page = require('./Page')

class LoginPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	createHeaderEl = By.css('.page-title')
	alreadyCreatedTextEl = By.xpath('/html/body/div[2]/div/div[2]/div/div/div[2]/ul/li/ul/li/span')

	formEmail = By.id('email')
	formPassword = By.id('pass')
	loginBtn = By.id('send2')
	
	formEmailErr = By.id('advice-required-entry-email')
	formPasswordErr = By.id('advice-required-entry-pass')
	formPassword2Err = By.id('advice-validate-password-password')

	// page action
	async openPage() {
		await this.openUrl('/customer/account/login/')
	}
	/**
	 * @param {string} email
	 * @param {string} password
	 */
    async loginProcess(email, password) {
		await this.driver.findElement(this.formEmail).sendKeys(email)
		await this.driver.findElement(this.formPassword).sendKeys(password)
		await this.driver.findElement(this.loginBtn).click()
	}
    async getHeaderText() {
		return await this.driver.findElement(this.createHeaderEl).getText()
	}
    async getAlreadyCreatedText() {
		return await this.driver.findElement(this.alreadyCreatedTextEl).getText()
	}
    async getEmailErrText() {
		return await this.driver.findElement(this.formEmailErr).getText()
	}
    async getPasswordErrText() {
		return await this.driver.findElement(this.formPasswordErr).getText()
	}
}

module.exports = LoginPage