const { WebDriver, until, By } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')
const DashboardPage = require('../pageobjects/DashboardPage')

describe('FT_003_LOGIN_PAGE', function () {

	/** @type {WebDriver} */ let driver
	/** @type {LoginPage} */ let loginPage
	/** @type {DashboardPage} */ let dashboardPage

	before(async function () {
		driver = await setupDriver()
		loginPage = new LoginPage(driver)
		dashboardPage = new DashboardPage(driver)
	})

	it('LP_001 - Coba membuka halaman login', async function () {
		await loginPage.openPage()

		const massage = await loginPage.getHeaderText()
		expect(massage).to.be.equal('LOGIN OR CREATE AN ACCOUNT')
	})
	it('LP_002 - Coba login dengan input benar', async function () {
		await loginPage.loginProcess(
            "Elon@Musk.com",
            "1234567"
        )
        await driver.sleep(3000)
		
		const massage = await dashboardPage.getHeaderText()
		expect(massage).to.be.equal('MY DASHBOARD')
        await dashboardPage.logoutProcess()
	})
	it('LP_003 - Coba login dengan input kosong', async function () {
		await loginPage.openPage()
		await loginPage.loginProcess(
            "",
            "",
        )
        await driver.sleep(1000)
		
		const massage = await loginPage.getEmailErrText()
		const massage2 = await loginPage.getPasswordErrText()
		expect(massage).to.be.equal('This is a required field.')
		expect(massage2).to.be.equal('This is a required field.')
	})

	afterEach(async function () {
		await driver.sleep(1000)
	})

	after(async function () {
		await driver.close()
	})
})
