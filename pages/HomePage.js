const environment = require("../config/environment");

class HomePage {

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(
            environment.baseUrl,
            {
                waitUntil: "domcontentloaded"
            }
        );
    }
}

module.exports = HomePage;