const { Builder , By } = require("selenium-webdriver");
//const { assert } = require("assert");
import {assert} from "chai";

describe('Blazedemo por programação', () => {
    let driver;
    let url = "https://blazedemo.com";

    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().setTimeouts({implicit: 30000});
    })

    afterEach(async function() {
        driver.quit();
    })

    it('Comprar passagem', async() => {
        await driver.get(url);
        await driver.findElement(By.css("option[value = 'Portland']")).click();
        await driver.findElement(By.css("option[value = 'Rome']")).click();
        await driver.findElement(By.css("[class = 'btn btn-primary']")).click();
        await expect(driver.getTitle()).resolves.toBe("BlazeDemo - reserve");
        await expect(driver.findElement(By.css("div h3")).getText()).resolves.toBe("Flights from Portland to Rome:");
        
    })
})