const { Given, Then } = require("@cucumber/cucumber");

const {
    navigateToHomePage
} = require("../pages/HomePage");

Given("I navigate to the BBC iPlayer homepage", async function () {

    await navigateToHomePage(this.page);

});

Then("I should see the BBC iPlayer homepage", async function () {

    await this.page.waitForLoadState("domcontentloaded");

    console.log("BBC iPlayer homepage loaded");

});