Feature: BBC iPlayer account selection

  Scenario: User can launch the adult account
    Given I navigate to the BBC iPlayer account selection page
    Then I should see the BBC iPlayer account selection page
    When I select the adult account


  Scenario: User can launch the kids account
    Given I navigate to the BBC iPlayer account selection page
    Then I should see the BBC iPlayer account selection page
    When I select the kids account