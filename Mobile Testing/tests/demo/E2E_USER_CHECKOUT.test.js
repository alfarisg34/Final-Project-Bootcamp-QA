const { expect } = require('chai')
const setupDriver = require('../../utils/setupDriver')
const HomePage = require('../../pageobjects/demo/HomePage')
const RegisterPage = require('../../pageobjects/demo/RegisterPage')
const LoginPage = require('../../pageobjects/demo/LoginPage')
const InventoryPage = require('../../pageobjects/demo/InventoryPage')
const CartPage = require('../../pageobjects/demo/CartPage')

describe('E2E_USER_CHECKOUT', function () {
	/** @type {WebdriverIO.Browser} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {RegisterPage} */ let registerPage
    /** @type {LoginPage} */ let loginPage
    /** @type {InventoryPage} */ let inventoryPage
    /** @type {CartPage} */ let cartPage
    
	before(async function () {
		driver = await setupDriver()
        homePage = new HomePage(driver)
        registerPage = new RegisterPage(driver)
        loginPage = new LoginPage(driver)
        inventoryPage = new InventoryPage(driver)
        cartPage = new CartPage(driver)
	})

	it('E2E_001 - Coba pindah ke halaman login', async function () {
		// await homePage.clickAllowBtn()
        await homePage.clickBtn("login")

		const msg = await loginPage.getLoginText()
		expect(msg).to.include("LOGIN")
	})
	it('E2E_002 - Coba login', async function () {
        await loginPage.loginProcess(
			'alfarisg34@gmail.com',
			'yFXIji33'
		)
		const msg = await loginPage.getAlertLoginText()
		expect(msg).to.include("Login successfully")
	})
	it('E2E_003 - Coba cari barang', async function () {
		await driver.pause(10000)
        await inventoryPage.searchProcess(
			'iba hair color',
		)
		const msg = await inventoryPage.getProductNameText()
		expect(msg).to.equal("iba hair color")
	})
	it('E2E_004 - Coba add to cart', async function () {
        await inventoryPage.addToCart()
		await driver.pause(1000)

		const msg = await inventoryPage.getCounterNumE2e()
		expect(msg).to.equal("1")
	})
	it('E2E_005 - Coba pindah ke halaman cart', async function () {
        await inventoryPage.toCartPage()
		await driver.pause(3000)

		const msg = await cartPage.getItemNameText()
		expect(msg).to.include("iba hair color")
	})
	it('E2E_006 - Coba checkout barang(Step One)', async function () {
		await cartPage.checkoutProcessOne()
		await driver.pause(3000)

		const msg = await cartPage.getIntructionText()
		expect(msg).to.equal("Instructions:-Standard Delivery")
	})
	it('E2E_007 - Coba checkout barang(Step Two)', async function () {
		await cartPage.checkoutProcessTwo()
		await driver.pause(3000)

		const msg = await cartPage.getSuccessText()
		expect(msg).to.equal("Your order has been placed successfully.")
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})