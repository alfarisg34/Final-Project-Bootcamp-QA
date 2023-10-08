const { By } = require('selenium-webdriver')
const Page = require('./Page')

class RegisterPage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	createHeaderEl = By.css('.page-title')
	alreadyCreatedTextEl = By.xpath('/html/body/div[2]/div/div[2]/div/div/div[2]/ul/li/ul/li/span')

	formFirstName = By.id('firstname')
	formLastName = By.id('lastname')
	formEmail = By.id('email_address')
	formPassword = By.id('password')
	formConfirmation = By.id('confirmation')
	registerBtnEl = By.xpath('/html/body/div[2]/div/div[2]/div/div/div[2]/form/div[2]/button')
	
	formFirstNameErr = By.id('advice-required-entry-firstname')
	formLastNameErr = By.id('advice-required-entry-lastname')
	formEmailErr = By.id('advice-required-entry-email_address')
	formPasswordErr = By.id('advice-required-entry-password')
	formPassword2Err = By.id('advice-validate-password-password')
	formConfirmationErr = By.id('advice-required-entry-confirmation')

	// page action
	async openPage() {
		await this.openUrl('/customer/account/create/')
	}
	/**
	 * @param {string} firstName
	 * @param {string} lastName
	 * @param {string} email
	 * @param {string} password
	 * @param {string} confirmation
	 */
    async registerProcess(firstName, lastName, email, password , confirmation) {
		await this.driver.findElement(this.formFirstName).sendKeys(firstName)
		await this.driver.findElement(this.formLastName).sendKeys(lastName)
		await this.driver.findElement(this.formEmail).sendKeys(email)
		await this.driver.findElement(this.formPassword).sendKeys(password)
		await this.driver.findElement(this.formConfirmation).sendKeys(confirmation)
		await this.driver.executeScript(function(){
			document.querySelector('html').scrollBy({top:1000,behavior:'smooth'})
		})
		await this.driver.sleep(500)
		await this.driver.findElement(this.registerBtnEl).click()
	}
    async getHeaderLoginText() {
		return await this.driver.findElement(this.createHeaderEl).getText()
	}
    async getAlreadyCreatedText() {
		return await this.driver.findElement(this.alreadyCreatedTextEl).getText()
	}
    async getPasswordErrText() {
		return await this.driver.findElement(this.formPassword2Err).getText()
	}
}

module.exports = RegisterPage