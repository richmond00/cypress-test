/// <reference types="cypress" />

describe('Verifying variables, cypress commands and jquery commands', () => {
  it('Navigating to specific product pages', () => {
    const makeupLink = cy.get("")
    const skincareLink = cy.get("")

  });

  it.only('Navigating to specific product pages', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact');
    // Uses cypress commands and chaning
    cy.get('#ContactUsFrm').find('#field_11').contains('First name');
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
    
    // JQuery Approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
      const firstNameText = text.find('#field_11').text();
      expect(firstNameText).to.contain('First name');
    // Embeded commands (Closure)
      cy.get('#field_11').then(fnText => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });



  });
});