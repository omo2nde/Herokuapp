Feature: Answer Digital Automation Test Task
  The task is designed to test candidate test automation knowledge

  Background:

    Given I am on http://the-internet.herokuapp.com/

  Scenario: Form Authentication
    When I click on form authentication on Menu list
    Then I should be taken to a login page

  Scenario: Login with invalid password on the login page
    When I enter "tomsmith" as username and "Supersecretpassword" as password
    And I click on login validation button
    Then The page should display Your password is invalid!


  Scenario: Login with incorrect Username and correct Password
    When I enter Username as "smithtom" and Password "SuperSecretPassword!"
    And I click login validation button
    Then The page should display Your username is invalid!


  Scenario: Login with correct Username and Correct Password
    When I enter Username as "tomsmith" and Password as "SuperSecretPassword!"
    And I click on login validation button
    Then I should be logged in successfully

  Scenario: Verifying the infinite scroll on Menu
    When I click on infinite scroll on menu
    And I scroll to the bottom page twice
    And I scroll back to the top of the page
    Then I should be able to verify the infinite scroll text


  Scenario: Verifying the key presses on menu
    When I click on key press on menu
    And I click 4 key
    Then I should be able to verify test displayed after every key press



