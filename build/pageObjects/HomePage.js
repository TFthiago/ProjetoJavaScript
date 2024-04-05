const BasePage = require("./BasePage");
const By = require("selenium-webdriver").By;
class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.weekDestination = By.linkText("destination of the week! The Beach!");
        this.departureOption = By.name("fromPort");
        this.destinationOption = By.name("toPort");
        this.btnFindFlights = By.css("[class = 'btn btn-primary']");
    }
    async checkDestinationOfWeek() {
        await this.driver.findElement(this.weekDestination).click();
    }
    async chooseDepartureDestination(departure, destination) {
        let dep = await this.driver.findElement(this.departureOption);
        await dep.findElement(By.css(`[value="${departure}"]`)).click();
        let dest = await this.driver.findElement(this.destinationOption);
        await dest.findElement(By.css(`[value="${destination}"]`)).click();
        await this.driver.findElement(this.btnFindFlights).click();
    }
}
module.exports = HomePage;
