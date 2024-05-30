const { expect } = require('chai')
const setupDriver = require('../../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const RegisterPage = require('../pageobjects/RegisterPage')
const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe.only('FT_004_INVENTORY_PAGE', function () {
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
	it('IP_001 - Coba tombol grid', async function () {
		// await homePage.clickAllowBtn()
		await homePage.clickBtn("skip")
		await driver.pause(8000)
		await inventoryPage.clickGridBtn()
	})
	it('IP_002 - Coba tombol list', async function () {
		await driver.pause(3000)
		await inventoryPage.clickListBtn()
	})
	it('IP_003 - Coba cari barang dengan inputan "iba hair color"', async function () {
        await inventoryPage.searchProcess(
			'iba hair color',
		)
		await driver.pause(5000)
		const msg = await inventoryPage.getProductNameText()
		expect(msg).to.equal("iba hair color")
		await inventoryPage.clickBackBtn()
	})
	it('IP_004 - Coba add to cart', async function () {
		
        await inventoryPage.addToCart()
		await driver.pause(1000)

		const msg = await inventoryPage.getCounterNum()
		expect(msg).to.equal("1")
	})
	it('IP_005 - Coba cari barang dengan inputan "#1234"', async function () {
        await inventoryPage.searchProcess(
			'#1234',
		)
		await driver.pause(5000)
		const msg = await inventoryPage.getErrMsg()
		expect(msg).to.include("Oops! we can't seem to find what you are looking for. Please try different filters .")
		await inventoryPage.clickBackBtn()
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})