$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Answer Digital Automation Test Task",
  "description": "The task is designed to test candidate test automation knowledge",
  "id": "answer-digital-automation-test-task",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on http://the-internet.herokuapp.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.i_am_on_http_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 10211570983,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Form Authentication",
  "description": "",
  "id": "answer-digital-automation-test-task;form-authentication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on form authentication on Menu list",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be taken to a login page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStep.i_should_be_taken_to_a_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on http://the-internet.herokuapp.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.i_am_on_http_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 13961051008,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with invalid password on the login page",
  "description": "",
  "id": "answer-digital-automation-test-task;login-with-invalid-password-on-the-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I enter \"tomsmith\" as username and \"Supersecretpassword\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on login validation button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The page should display Your password is invalid!",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 9
    },
    {
      "val": "Supersecretpassword",
      "offset": 36
    }
  ],
  "location": "LoginStep.i_enter_as_username_and_as_password(String,String)"
});
formatter.result({
  "duration": 416774837,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_click_on_login_validation_button()"
});
formatter.result({
  "duration": 594815800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_page_should_display_Your_password_is_invalid()"
});
formatter.result({
  "duration": 160367,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on http://the-internet.herokuapp.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.i_am_on_http_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 13269905379,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login with incorrect Username and correct Password",
  "description": "",
  "id": "answer-digital-automation-test-task;login-with-incorrect-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I enter Username as \"smithtom\" and Password \"SuperSecretPassword!\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click login validation button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "The page should display Your username is invalid!",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "smithtom",
      "offset": 21
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 45
    }
  ],
  "location": "LoginStep.i_enter_Username_as_and_Password(String,String)"
});
formatter.result({
  "duration": 456458705,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_click_login_validation_button()"
});
formatter.result({
  "duration": 1115351845,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_page_should_display_Your_username_is_invalid()"
});
formatter.result({
  "duration": 184664,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on http://the-internet.herokuapp.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.i_am_on_http_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 17055631929,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login with correct Username and Correct Password",
  "description": "",
  "id": "answer-digital-automation-test-task;login-with-correct-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I enter Username as \"tomsmith\" and Password as \"SuperSecretPassword!\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on login validation button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 21
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 48
    }
  ],
  "location": "LoginStep.i_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 347590621,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_click_on_login_validation_button()"
});
formatter.result({
  "duration": 4891611934,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 80994,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on http://the-internet.herokuapp.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.i_am_on_http_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 21831124205,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verifying the infinite scroll on Menu",
  "description": "",
  "id": "answer-digital-automation-test-task;verifying-the-infinite-scroll-on-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I click on infinite scroll on menu",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I scroll to the bottom page twice",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I scroll back to the top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to verify the infinite scroll text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.i_click_on_infinite_scroll_on_menu()"
});
formatter.result({
  "duration": 8407477921,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_scroll_to_the_bottom_page_twice()"
});
formatter.result({
  "duration": 16988010,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_scroll_back_to_the_top_of_the_page()"
});
formatter.result({
  "duration": 31318,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_should_be_able_to_verify_the_infinite_scroll_text()"
});
formatter.result({
  "duration": 31317,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on http://the-internet.herokuapp.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.i_am_on_http_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 22875164956,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verifying the key presses on menu",
  "description": "",
  "id": "answer-digital-automation-test-task;verifying-the-key-presses-on-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I click on key press on menu",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click 4 key",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should be able to verify test displayed after every key press",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.i_click_on_key_press_on_menu()"
});
formatter.result({
  "duration": 7287690361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    }
  ],
  "location": "LoginStep.iClickKey(int)"
});
formatter.result({
  "duration": 235193401,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_should_be_able_to_verify_test_displayed_after_every_key_press()"
});
formatter.result({
  "duration": 175485,
  "status": "passed"
});
});