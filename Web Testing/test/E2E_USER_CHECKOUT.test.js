const { WebDriver, until, By } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')
const CatalogSearchPage = require('../pageobjects/CatalogSearchPage')
const LinenBlazerProductPage = require('../pageobjects/LinenBlazerProductPage')
const WomenPage = require('../pageobjects/WomenPage')
const MenPage = require('../pageobjects/MenPage')
const CheckoutPage = require('../pageobjects/CheckoutPage')

describe('E2E_USER_CHECKOUT', function () {

	/** @type {WebDriver} */ let driver
	/** @type {HomePage} */ let homePage
	/** @type {LoginPage} */ let loginPage
	/** @type {CatalogSearchPage} */ let catalogSearchPage
	/** @type {LinenBlazerProductPage} */ let linenBlazerProductPage
	/** @type {WomenPage} */ let womenPage
	/** @type {MenPage} */ let menPage
	/** @type {CheckoutPage} */ let checkoutPage

	before(async function () {
		driver = await setupDriver()
		homePage = new HomePage(driver)
		loginPage = new LoginPage(driver)
		catalogSearchPage = new CatalogSearchPage(driver)
		linenBlazerProductPage = new LinenBlazerProductPage(driver)
		womenPage = new WomenPage(driver)
		menPage = new MenPage(driver)
		checkoutPage = new CheckoutPage(driver)
	})

	it('E2E_001 - Coba membuka halaman utama', async function () {
		await homePage.openPage()

		const massage = await homePage.getWelcomeMassage()
		expect(massage).to.be.equal('WELCOME')
	})
    it('E2E_002 - Coba search dengan inputan "blazer"', async function () {
		await homePage.openPage()
		await homePage.searchProcess("blazer")
		await driver.sleep(500)
		
		const massage = await catalogSearchPage.getBlazerText()
		await driver.sleep(500)
		expect(massage).to.be.include('BLAZER')
	})
    it('E2E_003 - Coba buka detail produk Linen Blazer', async function () {
		await linenBlazerProductPage.openPage()
		
		const massage = await linenBlazerProductPage.getLinenBlazerText()
		await driver.sleep(500)
		expect(massage).to.be.equal('LINEN BLAZER')
	})
	it('E2E_004 - Coba tambah barang', async function () {
		await linenBlazerProductPage.addToCartProcess("xl",1)
		
		const massage = await checkoutPage.getHeaderText()
		await driver.sleep(500)
		expect(massage).to.be.equal("SHOPPING CART")
	})
	it('E2E_005 - Coba checkout barang', async function () {
		await checkoutPage.checkoutClick()
        await checkoutPage.continueClick()
        await checkoutPage.inputFormProcess()
		await driver.sleep(1000)

		const massage = await checkoutPage.getThankYouText()
		await driver.sleep(1000)
		expect(massage).to.be.equal("THANK YOU FOR YOUR PURCHASE!")
	})
	
	afterEach(async function () {
		await driver.sleep(1000)
	})

	after(async function () {
		await driver.close()
	})
})