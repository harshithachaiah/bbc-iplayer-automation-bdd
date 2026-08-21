const { setWorldConstructor } = require("@cucumber/cucumber");
const {
    chromium,
    firefox,
    webkit
} = require("playwright");

const fs = require("fs");
const path = require("path");

const environment = require("../config/environment");

class CustomWorld {

    constructor({ parameters }) {

        this.browser = null;
        this.context = null;
        this.page = null;

        // Page Objects
        this.homePage = null;
        this.signInPage = null;
        this.searchPage = null;

        // Browser
        this.browserName =
            parameters?.browser || "chromium";

        // Scenario
        this.scenarioName = null;

        // Failure evidence
        this.evidenceDirectory = null;
    }

    async initBrowser() {

        let browserType;

        switch (this.browserName) {

            case "firefox":
                browserType = firefox;
                break;

            case "webkit":
                browserType = webkit;
                break;

            case "chromium":
            default:
                browserType = chromium;
                break;
        }

        console.log(
            `Launching browser: ${this.browserName}`
        );

        this.browser = await browserType.launch({
            headless: false
        });

        const authFile = path.join(
            process.cwd(),
            "auth",
            `${environment.name}-iplayer-state.json`
        );

        if (!fs.existsSync(authFile)) {

            throw new Error(
                `Authentication state not found:

${authFile}

Run the authentication setup for the ${environment.name.toUpperCase()} environment first.`
            );
        }

        console.log(
            `Loading authentication state: ${authFile}`
        );

        this.context = await this.browser.newContext({
            storageState: authFile
        });

        this.page = await this.context.newPage();
    }

    async createEvidenceDirectory() {

        const timestamp = new Date()
            .toISOString()
            .replace(/[:.]/g, "-");

        const safeScenarioName = (
            this.scenarioName || "unknown-scenario"
        )
            .replace(/[^a-z0-9]/gi, "_")
            .toLowerCase()
            .substring(0, 80);

        this.evidenceDirectory = path.join(
            process.cwd(),
            "test-results",
            `${this.browserName}_${safeScenarioName}_${timestamp}`
        );

        fs.mkdirSync(
            this.evidenceDirectory,
            {
                recursive: true
            }
        );
    }

    async takeFailureScreenshot() {

        if (!this.page || !this.evidenceDirectory) {
            return;
        }

        const screenshotPath = path.join(
            this.evidenceDirectory,
            "failure.png"
        );

        await this.page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        console.log(
            `Failure screenshot: ${screenshotPath}`
        );
    }

    async closeBrowser() {

        if (this.browser) {

            await this.browser.close();

            this.browser = null;
            this.context = null;
            this.page = null;
        }
    }
}

setWorldConstructor(CustomWorld);