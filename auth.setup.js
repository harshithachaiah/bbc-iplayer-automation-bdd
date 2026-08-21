const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const environment = require("./config/environment");

const authDirectory = path.resolve(
    process.cwd(),
    "auth"
);

const authFile = path.join(
    authDirectory,
    `${environment.name}-iplayer-state.json`
);

(async () => {

    console.log("");
    console.log("========================================");
    console.log(
        `BBC iPlayer ${environment.name.toUpperCase()} authentication`
    );
    console.log("========================================");
    console.log("");

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();

    const page = await context.newPage();

    console.log("Opening sign-in page...");

    await page.goto(
        environment.signInUrl,
        {
            waitUntil: "domcontentloaded"
        }
    );

    console.log("");
    console.log("========================================");
    console.log("Complete the BBC iPlayer sign-in manually.");
    console.log("");
    console.log("Use:");
    console.log("1. QR code authentication");
    console.log("OR");
    console.log("2. Remote sign-in");
    console.log("");
    console.log("After you are successfully signed in,");
    console.log("return to this terminal and press ENTER.");
    console.log("========================================");
    console.log("");

    await new Promise((resolve) => {

        process.stdin.resume();

        process.stdin.once("data", () => {
            resolve();
        });

    });

    console.log("");
    console.log("Saving authentication state...");

    fs.mkdirSync(
        authDirectory,
        {
            recursive: true
        }
    );

    await context.storageState({
        path: authFile
    });

    console.log("");
    console.log("Authentication state saved:");
    console.log(authFile);
    console.log("");

    await browser.close();

})();