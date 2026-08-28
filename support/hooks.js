const {
    Before,
    After
} = require("@cucumber/cucumber");

Before(async function ({ pickle }) {

    this.scenarioName = pickle.name;

    await this.initBrowser();

});

After(async function (scenario) {

    if (scenario.result?.status === "FAILED") {

        await this.createEvidenceDirectory();

        await this.takeFailureScreenshot();
    }

    await this.closeBrowser();

});