class LoginPage {
  elements = {
    inputUsername: () => cy.get("input[name=uid]"),
    inputPassword: () => cy.get("input[name=password]"),
    btnLogin: () => cy.get("input[name=btnLogin]"),
  };

  typeUsername(username) {
    this.elements.inputUsername().type(username);
  }

  typePassword(password) {
    this.elements.inputPassword().type(password);
  }

  clickLoginButton() {
    this.elements.btnLogin().click();
  }

  loginSuccess() {
    cy.visit("/");
    this.typeUsername(Cypress.env("username"));
    this.typePassword(Cypress.env("password"));
    this.clickLoginButton();
    cy.contains("Welcome To Manager's Page of Guru99 Bank");
    cy.title().should("eq", "Guru99 Bank Manager HomePage");
    cy.url().should("include", "homepage");
  }
}
export default new LoginPage();
