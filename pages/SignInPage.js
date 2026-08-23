const environment = require("../config/environment");

const navigateToSignInPage = async (page) => {
    await page.goto(environment.signInUrl, {
        waitUntil: "domcontentloaded"
    });
};

module.exports = {
    navigateToSignInPage
};