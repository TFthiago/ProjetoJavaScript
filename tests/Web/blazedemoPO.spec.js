const HomePage = require("../../pageObjects/HomePage");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
//const HomePage = require("../../pageObjects/HomePage");

describe('webTest com PageObject', ()=> {
    let driver;
    const chOptions = new chrome.Options();
    let url = "https://blazedemo.com";

    beforeEach(() => {  
        driver = new webdriver.Builder()
            .forBrowser("chrome")
            .setChromeOptions(chOptions)
            .build();
        driver.manage().setTimeouts({implicit: 30000});
        driver.manage().window().maximize();

    })

    afterEach(() => {
        driver.quit();
    })
    it('Comprar passagem - PO', async()=> {
        await driver.get(url);
        const homePage = new HomePage(driver);

        await homePage.chooseDepartureDestination("Boston", "Dublin");
        await expect(homePage.readTitle()).resolves.toBe("BlazeDemo - reserve");
        await homePage.driver.sleep(1000);

    })
})