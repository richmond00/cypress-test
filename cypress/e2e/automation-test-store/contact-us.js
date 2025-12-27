/// <reference types="cypress" />

describe('Test Contact Us from via Automation Test Store', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://automationteststore.com');
    cy.get('a[href$="contact"]').click();
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get('#ContactUsFrm_first_name').type("Joe");
    cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
    cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
    cy.get('button[title="Submit"]').click();
    // cy.get('.col-md-6 > .btn').click();


  });
});