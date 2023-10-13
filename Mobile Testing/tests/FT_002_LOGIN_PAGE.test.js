const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const RegisterPage = require('../pageobjects/RegisterPage')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe('FT_002_LOGIN_PAGE', function () {
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

		// await homePage.clickAllowBtn()
	})

	it('E2E_001 - Coba login dengan password salah', async function () {
		await homePage.clickBtn("login")
		await driver.pause(3000)
        await loginPage.loginProcess(
			'alfarisg34@gmail.com',
			'yFXIji335'
		)
		const msg = await loginPage.getAlertLoginFailedText()
		expect(msg).to.include("Username or Password is incorrect. Please try again")
	})
	it('E2E_002 - Coba login dengan email salah', async function () {
		// await homePage.clickBtn("login")
		await driver.pause(3000)
        await loginPage.loginProcess(
			'alfarisg34@mail.com',
			'yFXIji33'
		)
		const msg = await loginPage.getAlertLoginFailedText()
		expect(msg).to.include("Username or Password is incorrect. Please try again")
	})
	it('E2E_003 - Coba login dengan data benar', async function () {
		// await homePage.clickAllowBtn()
		await driver.pause(3000)
        await loginPage.loginProcess(
			'alfarisg34@gmail.com',
			'yFXIji33'
		)
		const msg = await loginPage.getAlertLoginText()
		expect(msg).to.include("Login successfully")
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})