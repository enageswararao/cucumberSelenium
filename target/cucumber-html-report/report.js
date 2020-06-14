$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Orange HRM application",
  "description": "As a test engeneer to validate login functionality of the Orange HRM application with all the combinations",
  "id": "login-orange-hrm-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12828886400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login Orange HRM application with Valid cradentials",
  "description": "",
  "id": "login-orange-hrm-application;login-orange-hrm-application-with-valid-cradentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "load the Orange HRM application url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the user name in Username textbox",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the Password in Password Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the message,\"Welcome Admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.load_the_Orange_HRM_application_url()"
});
formatter.result({
  "duration": 3890768000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.enter_the_user_name_in_Username_textbox()"
});
formatter.result({
  "duration": 379057400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.enter_the_Password_in_Password_Textbox()"
});
formatter.result({
  "duration": 226915800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.click_on_Login_Button()"
});
formatter.result({
  "duration": 4915681100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome Admin",
      "offset": 20
    }
  ],
  "location": "LoginStepDef.verify_the_message(String)"
});
formatter.result({
  "duration": 9352800,
  "status": "passed"
});
formatter.after({
  "duration": 1465290400,
  "status": "passed"
});
formatter.before({
  "duration": 7006694700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Orange HRM application with Valid2 cradentials",
  "description": "",
  "id": "login-orange-hrm-application;login-orange-hrm-application-with-valid2-cradentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "load the Orange HRM application url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Enter the user name in Username textbox",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Enter the Password in Password Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the message,\"LoginFailed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.load_the_Orange_HRM_application_url()"
});
formatter.result({
  "duration": 2810019300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.enter_the_user_name_in_Username_textbox()"
});
formatter.result({
  "duration": 147327800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.enter_the_Password_in_Password_Textbox()"
});
formatter.result({
  "duration": 182433500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.click_on_Login_Button()"
});
formatter.result({
  "duration": 4354802500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginFailed",
      "offset": 20
    }
  ],
  "location": "LoginStepDef.verify_the_message(String)"
});
formatter.result({
  "duration": 130100,
  "status": "passed"
});
formatter.after({
  "duration": 1547613500,
  "status": "passed"
});
});