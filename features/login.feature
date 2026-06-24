Feature: Login
    @login
    Scenario: Success Login
    Given User open saucedemo login page
    When User login with valid credential
    Then User successfully login