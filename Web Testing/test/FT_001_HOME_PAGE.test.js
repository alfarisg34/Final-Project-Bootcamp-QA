const { WebDriver, until, By } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')
const CatalogSearchPage = require('../pageobjects/CatalogSearchPage')
const LinenBlazerProductPage = require('../pageobjects/LinenBlazerProductPage')
const WomenPage = require('../pageobjects/WomenPage')
const MenPage = require('../pageobjects/MenPage')

describe('FT_001_HOME_PAGE', function () {

	/** @type {WebDriver} */ let driver
	/** @type {HomePage} */ let homePage
	/** @type {LoginPage} */ let loginPage
	/** @type {CatalogSearchPage} */ let catalogSearchPage
	/** @type {LinenBlazerProductPage} */ let linenBlazerProductPage
	/** @type {WomenPage} */ let womenPage
	/** @type {MenPage} */ let menPage

	before(async function () {
		driver = await setupDriver()
		homePage = new HomePage(driver)
		loginPage = new LoginPage(driver)
		catalogSearchPage = new CatalogSearchPage(driver)
		linenBlazerProductPage = new LinenBlazerProductPage(driver)
		womenPage = new WomenPage(driver)
		menPage = new MenPage(driver)
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
		expect(massage).to.be.equal('WILLCOMMEN')
	})
	it('HP_003 - Coba tombol "Cart" tanpa menambahkan barang', async function () {
		await homePage.openPage()
		await homePage.clickCartButton()
		await driver.sleep(500)
		
		const massage = await homePage.getNoItemText()
		await driver.sleep(500)
		expect(massage).to.be.equal('You have no items in your shopping cart.')
	})
	it('HP_004 - Coba tombol "Cart" setelah menambahkan 1 barang', async function () {
		await homePage.openPage()
		await linenBlazerProductPage.openPage()
		await linenBlazerProductPage.addToCartProcess("xl",1)
		await homePage.openPage()
		
		const massage = await homePage.getCartItemCountText()
		await driver.sleep(500)
		expect(massage).to.be.equal("1")
	})
	it('HP_005 - Coba search dengan inputan "blazer"', async function () {
		await homePage.openPage()
		await homePage.searchProcess("blazer")
		await driver.sleep(500)
		
		const massage = await catalogSearchPage.getBlazerText()
		await driver.sleep(500)
		expect(massage).to.be.include('BLAZER')
	})
	it('HP_006 - Coba search dengan inputan " "', async function () {
		await homePage.openPage()
		await homePage.searchProcess(" ")
		await driver.sleep(500)
		
		const massage = await homePage.getWelcomeMassage()
		await driver.sleep(500)
		expect(massage).to.be.include('WELCOME')
	})
	it('HP_007 - Coba search dengan inputan "#1234"', async function () {
		await homePage.openPage()
		await homePage.searchProcess("#1234")
		await driver.sleep(500)
		
		const massage = await catalogSearchPage.getNoResultText()
		await driver.sleep(500)
		expect(massage).to.be.equal('Your search returns no results.')
	})
	it('HP_008 - Coba navbar women dengan category view all woman', async function () {
		await homePage.openPage()
		await homePage.tryNavbarBtn("women")
		await driver.sleep(500)
		
		const massage = await womenPage.getWomanHeaderText()
		await driver.sleep(500)
		expect(massage).to.be.equal('WOMEN')
	})
	it('HP_008 - Coba navbar men dengan category view all men', async function () {
		await homePage.openPage()
		await homePage.tryNavbarBtn("men")
		await driver.sleep(500)
		
		const massage = await menPage.getMenHeaderText()
		await driver.sleep(500)
		expect(massage).to.be.equal('MEN')
	})
	it('HP_009 - Coba navbar acc dengan category view all acc', async function () {
		await homePage.openPage()
		await homePage.tryNavbarBtn("acc")
		await driver.sleep(500)
		
		const massage = await menPage.getMenHeaderText()
		await driver.sleep(500)
		expect(massage).to.be.equal('ACCESSORIES')
	})

	afterEach(async function () {
		await driver.sleep(1000)
	})

	after(async function () {
		await driver.close()
	})
})
