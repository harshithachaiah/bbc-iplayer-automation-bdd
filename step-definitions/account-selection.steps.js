const {
    Given,
    Then,
    When
} = require("@cucumber/cucumber");

const {
    navigateToAccountSelectionPage,
    isAccountSelectionPageDisplayed,
    selectAdultAccount,
    selectKidsAccount
} = require("../pages/AccountSelectionPage");


Given(
    "I navigate to the BBC iPlayer account selection page",
    async function () {

        await navigateToAccountSelectionPage(this.page);

    }
);


Then(
    "I should see the BBC iPlayer account selection page",
    async function () {

        await isAccountSelectionPageDisplayed(this.page);

        console.log(
            "BBC iPlayer account selection page loaded"
        );

    }
);


When(
    "I select the adult account",
    async function () {

        await selectAdultAccount(this.page);

        console.log(
            "Adult account selected"
        );

    }
);


When(
    "I select the kids account",
    async function () {

        await selectKidsAccount(this.page);

        console.log(
            "Kids account selected"
        );

    }
);