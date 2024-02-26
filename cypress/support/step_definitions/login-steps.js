import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../pages/login-page";

When("I login to Guru Bank", () => {
  loginPage.loginSuccess();
});

Given("A user opens Guru Bank website", () => {
  cy.visit("/");
});

Then("I should see a search bar", () => {
  cy.get("[id=searchbox_input]").should(
    "have.attr",
    "placeholder",
    "Search without being tracked"
  );
});
