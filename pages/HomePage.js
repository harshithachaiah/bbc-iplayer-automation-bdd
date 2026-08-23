const environment = require("../config/environment");

const navigateToHomePage = async (page) => {
    await page.goto(environment.baseUrl, {
        waitUntil: "domcontentloaded"
    });
};

module.exports = {
    navigateToHomePage
};