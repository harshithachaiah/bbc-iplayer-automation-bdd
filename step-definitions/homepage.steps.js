const { Given, Then } = require("@cucumber/cucumber");

const HomePage = require("../pages/HomePage");

Given("I navigate to the BBC iPlayer homepage", async function () {

    this.homePage = new HomePage(this.page);

    await this.homePage.navigate();

});

Then("I should see the BBC iPlayer homepage", async function () {

    await this.page.waitForLoadState("domcontentloaded");

    console.log("BBC iPlayer homepage loaded");

});