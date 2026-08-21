module.exports = {
    default: {

        paths: [
            "features/**/*.feature"
        ],

        require: [
            "step-definitions/**/*.js",
            "support/**/*.js"
        ],

        format: [
            "progress",
            "json:reports/cucumber/cucumber.json",
            "html:reports/cucumber/cucumber.html"
        ],

        publishQuiet: true
    }
};