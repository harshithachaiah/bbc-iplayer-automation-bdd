const environment = require("../config/environment");

class SignInPage {

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(
            environment.signInUrl,
            {
                waitUntil: "domcontentloaded"
            }
        );
    }
}

module.exports = SignInPage;