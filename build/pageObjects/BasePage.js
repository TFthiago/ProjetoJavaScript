class BasePage {
    constructor(driver) {
        this.driver = driver;
    }
    async readTitle() {
        return await this.driver.getTitle();
    }
}
;
module.exports = BasePage;
