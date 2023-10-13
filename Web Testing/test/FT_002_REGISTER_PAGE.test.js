const { WebDriver, until, By } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const RegisterPage = require('../pageobjects/RegisterPage')
const DashboardPage = require('../pageobjects/DashboardPage')

describe('FT_002_REGISTER_PAGE', function () {

	/** @type {WebDriver} */ let driver
	/** @type {RegisterPage} */ let registerPage
	/** @type {DashboardPage} */ let dashboardPage

	before(async function () {
		driver = await setupDriver()
		registerPage = new RegisterPage(driver)
		dashboardPage = new DashboardPage(driver)
	})
	beforeEach(async function(){
		await registerPage.openPage()
	})

	it('RP_001 - Coba membuka halaman register', async function () {
		// await registerPage.openPage()

		const massage = await registerPage.getHeaderLoginText()
		expect(massage).to.be.equal('CREATE AN ACCOUNT')
	})
	it.skip('RP_002 - Coba register dengan input benar', async function () {
		await registerPage.registerProcess(
            "Elon",
            "Musk",
            "Elon1@Musk.com",
            "1234567",
            "1234567"
        )
        await driver.sleep(3000)
		
		const massage = await dashboardPage.getHeaderText()
		expect(massage).to.be.equal('MY DASHBOARD')
        await dashboardPage.logoutProcess()
	})
	it('RP_003 - Coba register dengan email yang telah didaftarkan', async function () {
		// await registerPage.openPage()
		await registerPage.registerProcess(
            "Elon",
            "Musk",
            "Elon@Musk.com",
            "1234567",
            "1234567"
        )
        await driver.sleep(1000)
		
		const massage = await registerPage.getAlreadyCreatedText()
		expect(massage).to.be.include('There is already an account with this email address')
	})
	it('RP_004 - Coba register dengan password 6 karakter', async function () {
		// await registerPage.openPage()
		await registerPage.registerProcess(
            "Elon",
            "Musk",
            "Elon@Musk.com",
            "123456",
            "123456"
        )
        await driver.sleep(1000)
		
		const massage = await registerPage.getPasswordErrText()
		expect(massage).to.be.include('Please enter more characters or clean leading or trailing spaces.')
	})

	afterEach(async function () {
		await driver.sleep(1000)
	})

	after(async function () {
		await driver.close()
	})
})
