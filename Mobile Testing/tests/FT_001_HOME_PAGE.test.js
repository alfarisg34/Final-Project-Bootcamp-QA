const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const RegisterPage = require('../pageobjects/RegisterPage')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe('FT_001_HOME_PAGE', function () {
	/** @type {WebdriverIO.Browser} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {RegisterPage} */ let registerPage
    /** @type {LoginPage} */ let loginPage
    /** @type {InventoryPage} */ let inventoryPage
    
	before(async function () {
		driver = await setupDriver()
        homePage = new HomePage(driver)
        registerPage = new RegisterPage(driver)
        loginPage = new LoginPage(driver)
        inventoryPage = new InventoryPage(driver)
	})

	it('HP_001 - Coba pindah ke halaman register', async function () {
        // await homePage.clickAllowBtn()
		await homePage.clickBtn("register")

		const msg = await registerPage.getHeaderText()
		expect(msg).to.equal("logo")
		await driver.pause(2000)
		await driver.back()
	})
	it.skip('HP_002 - Coba pindah ke halaman login', async function () {
        await homePage.clickBtn("login")

		const msg = await loginPage.getLoginText()
		expect(msg).to.include("LOGIN")
		await driver.back()
	})
	it('HP_003 - Coba skip', async function () {
        await homePage.clickBtn("skip")
		await driver.pause(5000)

		const msg = await inventoryPage.getAllProductText()
		expect(msg).to.equal("-All Products")
	})
	afterEach(async function(){
		await driver.pause(2000)
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})