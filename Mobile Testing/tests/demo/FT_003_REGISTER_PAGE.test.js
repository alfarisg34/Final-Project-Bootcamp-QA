const { expect } = require('chai')
const setupDriver = require('../../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const RegisterPage = require('../pageobjects/RegisterPage')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe('FT_003_REGISTER_PAGE', function () {
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

	it.skip('LP_001 - Coba register dengan data benar', async function () {
		await homePage.clickAllowBtn()
		await homePage.clickBtn("register")
		await driver.pause(3000)
		await registerPage.registerProcess(
			'Rebecca',
			'081208120812',
			'rebecca@gmail.com',
			'12345678',
			'12345678',
			true,
			true
		)
		await driver.pause(3000)
		const msg = await registerPage.getAlertText()
		expect(msg).to.include("Verification code sent to your email. Please check spam also.")
	})
	it('LP_002 - Coba register dengan email yang sudah terdaftar', async function () {
		// await homePage.clickAllowBtn()
		await homePage.clickBtn("register")
		await driver.pause(3000)
		await registerPage.registerProcess(
			'Rebecca',
			'081208120812',
			'rebecca@gmail.com',
			'12345678',
			'12345678',
			true,
			false
		)
		await registerPage.clearFormAndInput("email", "alfarisg34@gmail.com")
		await driver.pause(3000)
		const msg = await registerPage.getErrorForm("emailExist")
		expect(msg).to.include("Email already exists.")
		await registerPage.clickBackBtn()
	})
	it('LP_003 - Coba register tanpa agree term and conditions', async function () {
		await homePage.clickBtn("register")
		await driver.pause(3000)
		await registerPage.registerProcess(
			'Rebecca',
			'081208120812',
			'rebecca@gmail.com',
			'12345678',
			'12345678',
			false,
			true
		)
		await driver.pause(3000)
		const msg = await registerPage.getAlertText()
		expect(msg).to.include("Please accept the terms & conditions first.")
		await registerPage.clickBackBtn()
	})
	it('LP_004 - Coba register dengan format no telp salah', async function () {
		await homePage.clickBtn("register")
		await driver.pause(3000)
		await registerPage.registerProcess(
			'Rebecca',
			'081208120812',
			'rebecca@gmail.com',
			'12345678',
			'12345678',
			true,
			false
		)
		await registerPage.clearFormAndInput("mobile", "12345678")
		await driver.pause(3000)
		const msg = await registerPage.getErrorForm("mobileLength")
		expect(msg).to.include("Invalid MobileNo Length.")
		await registerPage.clickBackBtn()
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})