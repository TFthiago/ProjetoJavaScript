const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('BlazedemoTestIDE', function() {
  //this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.manage().setTimeouts({implicit: 60000})
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('BlazedemoTest1', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1366, height: 728 })
    await driver.findElement(By.name("fromPort")).click()
    {
      const dropdown = await driver.findElement(By.name("fromPort"))
      await dropdown.findElement(By.xpath("//option[. = 'Mexico City']")).click()
    }
    await driver.findElement(By.name("toPort")).click()
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'New York']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css("tr:nth-child(3) .btn")).click()
    await driver.findElement(By.id("cardType")).click()
    {
      const dropdown = await driver.findElement(By.id("cardType"))
      await dropdown.findElement(By.xpath("//option[. = 'American Express']")).click()
    }
    await driver.findElement(By.id("creditCardMonth")).click()
    await driver.findElement(By.id("creditCardMonth")).sendKeys("15")
    await driver.findElement(By.id("creditCardYear")).click()
    await driver.findElement(By.id("creditCardYear")).sendKeys("2024")
    await driver.findElement(By.css(".btn-primary")).click()
    assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!")
  })
})
