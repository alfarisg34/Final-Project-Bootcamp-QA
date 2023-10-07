const { WebDriver, until, By } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')

describe('FT_001_HOME_PAGE', function () {

	/** @type {WebDriver} */ let driver
	/** @type {HomePage} */ let homePage
	/** @type {LoginPage} */ let loginPage

	before(async function () {
		driver = await setupDriver()
		homePage = new HomePage(driver)
		loginPage = new LoginPage(driver)
	})

	it('HP_001 - Coba membuka halaman utama', async function () {
		await homePage.openPage()

		const massage = await homePage.getWelcomeMassage()
		expect(massage).to.be.equal('WELCOME')
	})
	it('HP_002 - Coba ganti bahasa halaman ke bahasa jerman', async function () {
		await homePage.openPage()
		await homePage.changeLanguage("German")
		
		const massage = await homePage.getWelcomeMassage()
		expect(massage).to.be.equal('WELLLCOMMII')
	})
	it.only('HP_003 - Coba tombol "Account"', async function () {
		await homePage.openPage()
		await homePage.clickAccountButton()
		
		const massage = await homePage.getLoginDropdownText()
		expect(massage).to.be.equal('My Account')
	})

	afterEach(async function () {
		await driver.sleep(2000)
	})

	after(async function () {
		await driver.close()
	})
})
