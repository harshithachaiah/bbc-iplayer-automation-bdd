const environment = require("../config/environment");

const navigateToAccountSelectionPage = async (page) => {

    await page.goto(environment.baseUrl, {
        waitUntil: "domcontentloaded"
    });

};

const isAccountSelectionPageDisplayed = async (page) => {

    await page.getByTestId("Hash").waitFor({
        state: "visible",
        timeout: 10000
    });

};

const selectAdultAccount = async (page) => {

    const adultAccount = page.getByTestId("HasH");

    await adultAccount.waitFor({
        state: "visible",
        timeout: 10000
    });

    await adultAccount.click();

};

const selectKidsAccount = async (page) => {

    const kidsAccount = page.getByTestId("Hash");

    await kidsAccount.waitFor({
        state: "visible",
        timeout: 10000
    });

    await kidsAccount.click();

};

module.exports = {
    navigateToAccountSelectionPage,
    isAccountSelectionPageDisplayed,
    selectAdultAccount,
    selectKidsAccount
};