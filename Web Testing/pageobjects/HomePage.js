const { By } = require('selenium-webdriver')
const Page = require('./Page')

class HomePage extends Page {
	// initialization
	constructor(driver) {
		super(driver)
	}

	// element locators
	selectLanguageEl = By.css('#select-language')
	englishLanguageEl = By.xpath("/html/body/div[2]/div/div[1]/div/div/div/select/option[1]")
	frenchLanguageEl = By.xpath("/html/body/div[2]/div/div[1]/div/div/div/select/option[2]")
	germanLanguageEl = By.xpath("/html/body/div[2]/div/div[1]/div/div/div/select/option[3]")

	welcomeMassageEl = By.css('.welcome-msg')
	tealiumLogoEl = By.css('.large')

	accountBtnEl = By.xpath("/html/body/div[2]/div/header/div/div[2]/div/a")
	myAccountBtnEl = By.xpath("/html/body/div[2]/div/header/div/div[5]/div/ul/li[1]/a")
	myWishlistBtnEl = By.xpath("/html/body/div[2]/div/header/div/div[5]/div/ul/li[2]/a")
	myCartBtnEl = By.xpath("/html/body/div[2]/div/header/div/div[5]/div/ul/li[3]/a")
	checkoutBtnEl = By.xpath("/html/body/div[2]/div/header/div/div[5]/div/ul/li[4]/a")
	registerBtnEl = By.xpath("/html/body/div[2]/div/header/div/div[5]/div/ul/li[5]/a")
	loginBtnEl = By.xpath("/html/body/div[2]/div/header/div/div[5]/div/ul/li[6]/a")
	
	cartBtnEl = By.css('.skip-cart')
	cartItemCountNumEl = By.xpath('/html/body/div[2]/div/header/div/div[2]/div/div/a/span[3]')
	noItemcartTextEl = By.xpath('/html/body/div[2]/div/header/div/div[2]/div/div/div/div[3]/p[2]')

	searchFormEl = By.css('#search')
	searchBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[4]/form/div[1]/button')
	
	womenNavBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[1]/a')
	viewAllWomenBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[1]/ul/li[1]/a')
	manNavBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[2]/a')
	viewAllManBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[2]/ul/li[1]/a')
	accNavBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[3]/a')
	viewAllAccBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[3]/ul/li[1]/a')
	homeNavBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[4]/a')
	viewAllHndBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[4]/ul/li[1]/a')
	saleNavBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[5]/a')
	viewAllSaleBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[5]/ul/li[1]/a')
	vipNavBtnEl = By.xpath('/html/body/div[2]/div/header/div/div[3]/nav/ol/li[6]/a')

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
		await this.driver.findElement(this.searchBtnEl).click()
	}
	async tryNavbarBtn(option) {
		switch(option){
			case "women":
				var actionNavbar = await this.driver.findElement(this.womenNavBtnEl)
				await this.driver.actions().move({ origin: actionNavbar}).perform()
				await this.driver.findElement(this.viewAllWomenBtnEl).click()
				break
			case "men":
				var actionNavbar = await this.driver.findElement(this.manNavBtnEl)
				await this.driver.actions().move({ origin: actionNavbar}).perform()
				await this.driver.findElement(this.viewAllManBtnEl).click()
				break
			case "acc":
				var actionNavbar = await this.driver.findElement(this.accNavBtnEl)
				await this.driver.actions().move({ origin: actionNavbar}).perform()
				await this.driver.findElement(this.viewAllAccBtnEl).click()
				break
			case "hnd":
				var actionNavbar = await this.driver.findElement(this.homeNavBtnEl)
				await this.driver.actions().move({ origin: actionNavbar}).perform()
				await this.driver.findElement(this.viewAllHndBtnEl).click()
				break
			case "sale":
				var actionNavbar = await this.driver.findElement(this.saleNavBtnEl)
				await this.driver.actions().move({ origin: actionNavbar}).perform()
				await this.driver.findElement(this.viewAllSaleBtnEl).click()
				break
			case "vip":
				await this.driver.findElement(this.vipNavBtnEl).click()
				break
		}
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
	}
	async getWelcomeMassage() {
		return await this.driver.findElement(this.welcomeMassageEl).getText()
	}
	async getNoItemText() {
		return await this.driver.findElement(this.noItemcartTextEl).getText()
	}
	async getCartItemCountText() {
		return await this.driver.findElement(this.cartItemCountNumEl).getText()
	}
	async clickAccountButton() {
		await this.driver.findElement(this.accountBtnEl).click()
	}
	async clickCartButton() {
		await this.driver.findElement(this.cartBtnEl).click()
	}
}

module.exports = HomePage