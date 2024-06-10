const { Builder, By, Browser} = require("selenium-webdriver");

describe('Google', () => {
    let driver;
    let url = "https://www.google.com.br";


    beforeEach(() => {
        driver = new Builder()
        .forBrowser(Browser.FIREFOX)
        .build();
    })

    afterEach(() => {
        driver.quit();
    })

    it('Consultar Google', async() => {
        await driver.get(url)
        await driver.findElement(By.name("q")).click();
        await driver.findElement(By.name("q")).sendKeys("mousse de chocolate");
        await driver.findElement(By.css("input[value = 'Pesquisa Google']")).click();

        await expect(driver.getTitle()).resolves.toBe("mousse de chocolate - Pesquisa Google");
        
    });
});