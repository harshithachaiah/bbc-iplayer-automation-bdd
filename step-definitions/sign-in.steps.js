const { Given } = require("@cucumber/cucumber");

const {
    navigateToSignInPage
} = require("../pages/SignInPage");

Given("I navigate to the BBC iPlayer sign-in page", async function () {

    await navigateToSignInPage(this.page);

});