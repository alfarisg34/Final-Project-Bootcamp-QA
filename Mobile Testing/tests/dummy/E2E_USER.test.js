const { expect } = require('chai')
const setupDriver = require('../../utils/setupDriver')
const Navbar = require('../../pageobjects/dummy/Navbar')
const HomePage = require('../../pageobjects/dummy/HomePage')
const LoginPage = require('../../pageobjects/dummy/LoginPage')

describe('E2E_USER', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {Navbar} */ let navbar
    /** @type {HomePage} */ let homePage
    /** @type {LoginPage} */ let loginPage
    
	before(async function () {
		driver = await setupDriver()
        navbar = new Navbar(driver)
        homePage = new HomePage(driver)
        loginPage = new LoginPage(driver)
	})

	it('E2E_001 - Coba pindah ke halaman webview', async function () {
        await navbar.clickBtn("webview")

		// const msg = await homePage.getWebdriverioText()
		// expect(msg).to.include("WEBDRIVER")
	})
	it('E2E_001 - Coba pindah ke halaman login', async function () {
        await navbar.clickBtn("login")

		// const msg = await loginPage.getLoginText()
		// expect(msg).to.include("LOGIN")
	})
	it('E2E_001 - Coba pindah ke halaman forms', async function () {
        await navbar.clickBtn("forms")

		// const msg = await loginPage.getLoginText()
		// expect(msg).to.include("LOGIN")
	})
	it('E2E_001 - Coba pindah ke halaman swipe', async function () {
        await navbar.clickBtn("swipe")

		// const msg = await loginPage.getLoginText()
		// expect(msg).to.include("LOGIN")
	})
	it('E2E_001 - Coba pindah ke halaman drag', async function () {
        await navbar.clickBtn("drag")

		// const msg = await loginPage.getLoginText()
		// expect(msg).to.include("LOGIN")
	})
	it('E2E_001 - Coba pindah ke halaman home', async function () {
        await navbar.clickBtn("home")

		const msg = await homePage.getWebdriverioText()
		expect(msg).to.include("WEBDRIVER")
	})
	

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})