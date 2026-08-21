const environments = {
    test: {
        name: "test",

        baseUrl:
            "https://www.test.bbctvapps.co.uk/tap/telly/iplayer?featureToggles=isUhdCapable",

        signInUrl:
            "https://www.test.bbctvapps.co.uk/tap/telly/iplayer/account/manage/selection?featureToggles=isUhdCapable#avatar-signin"
    },

    live: {
        name: "live",

        baseUrl:
            "https://www.live.bbctvapps.co.uk/tap/telly/iplayer?featureToggles=isUhdCapable",

        signInUrl:
            "https://www.live.bbctvapps.co.uk/tap/telly/iplayer/account/manage/selection?featureToggles=isUhdCapable#avatar-signin"
    }
};

const environmentName = (
    process.env.TEST_ENV || "test"
).toLowerCase();

const environment = environments[environmentName];

if (!environment) {
    throw new Error(
        `Unknown TEST_ENV "${environmentName}". ` +
        `Available environments: ${Object.keys(environments).join(", ")}`
    );
}

console.log(`Environment: ${environment.name}`);
console.log(`Base URL: ${environment.baseUrl}`);

module.exports = environment;