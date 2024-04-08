"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver");
const HomePage = require("../../pageObjects/HomePage");
//import {expect} from '@jest/globals';
const chai_1 = require("chai");
//const assert = require("chai").assert
//const assert = require('assert')
//import assert from "assert";
(0, cucumber_1.Before)(async function () {
    this.driver = await new selenium_webdriver_1.Builder()
        .forBrowser("chrome")
        .build();
    this.driver.manage().window().maximize();
    //this.driver.manage().setTimouts({implicit: 30000});
});
(0, cucumber_1.After)(async function () {
    this.driver.quit();
});
(0, cucumber_1.Given)('acesso o site blazedemo', async function () {
    this.driver.get("https://blazedemo.com");
    this.homePage = new HomePage(this.driver);
});
(0, cucumber_1.When)('seleciono a origem como {string} e destino como {string}', async function (departure, destination) {
    await this.homePage.chooseDepartureDestination(departure, destination);
});
(0, cucumber_1.Then)('carrega a pagina de reservas', async function () {
    //await expect(this.homePage.readTitle()).resolves.toBe("BlazeDemo - reserve");
    chai_1.assert.equal(await this.homePage.readTitle(), "BlazeDemo - reserve");
    await this.homePage.driver.sleep(1000);
});
