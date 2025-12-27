/// <reference types="cypress" />

describe('Test Contact Us from via WebdriverUni', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('input[name="first_name"]').type("Joe");
    cy.get('input[name="last_name"]').type("Blogs");
    cy.get('input[name="email"]').type("joe_blogs123@gmail.com");
    cy.get('textarea[name="message"]').type("How can I learn Cypress?");
    cy.get('input[type="submit"]').click();

    cy.contains("Thank You for your Message!").should('exist');
  });

  it('Should not be able to submit a succcessful submission via contact us form as all fields are required', () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('input[name="first_name"]').type("Tom");
    cy.get('input[name="last_name"]').type("Blogs");
    cy.get('textarea[name="message"]').type("How can I learn Cypress?");
    cy.get('input[type="submit"]').click();

    cy.contains("Error: all fields are required").should('exist');
  });
});