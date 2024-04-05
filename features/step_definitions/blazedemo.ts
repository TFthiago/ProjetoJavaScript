    import {Given, When, Then, Before, After} from "@cucumber/cucumber";
    import {Builder} from "selenium-webdriver";
    import HomePage = require("../../pageObjects/HomePage");
    //import {expect} from '@jest/globals';
    //import {assert} from "chai";
    //const assert = require("chai").assert
    //const assert = require('assert')
    import assert from "assert";

    Before(async function () {
      this.driver = await new Builder()
        .forBrowser("chrome")
        .build();
      this.driver.manage().window().maximize();
      //this.driver.manage().setTimouts({implicit: 30000});
    })
    
    After(async function () {
      this.driver.quit();
    })

    Given('acesso o site blazedemo', async function () {
      this.driver.get("https://blazedemo.com");
      this.homePage = new HomePage(this.driver);  

    });

    When('seleciono a origem como {string} e destino como {string}', async function (departure, destination) {
      await this.homePage.chooseDepartureDestination(departure, destination)
           
    });

    Then('carrega a pagina de reservas', async function () {
      //await expect(this.homePage.readTitle()).resolves.toBe("BlazeDemo - reserve");
      assert.equal(await this.homePage.readTitle(),"BlazeDemo - reserve");
      await this.homePage.driver.sleep(1000);
           
    });