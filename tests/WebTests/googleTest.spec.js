
//import { assert } from 'chai';
//import 'chai/register-assert';
const { Builder, By} = require("selenium-webdriver");

describe('Google', () => {
    let driver;
    let url = "https://www.google.com.br";


    beforeEach(() => {
        driver = new Builder()
        .forBrowser("chrome")
        .build()
    })

    afterEach(() => {
        driver.quit()
    })

    it('Consultar Google', async() => {
        await driver.get(url)
        await driver.findElement(By.name("q")).click();
        await driver.findElement(By.name("q")).sendKeys("League of legends");
        await driver.findElement(By.css("input[value = 'Pesquisa Google']")).click();

        await expect(driver.getTitle()).resolves.toBe("League of legends - Pesquisa Google")
        
    });
});