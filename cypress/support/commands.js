Cypress.Commands.add('multiClick', (element, times) => {
    for (let i=0; i<times; i++){  
      cy.xpath(element).click();
    }
});

Cypress.Commands.add('verifyMessage', (selector, text) => {
    cy.xpath(selector).should(($el) => {
        expect($el.text().trim()).to.equal(text)} );
  })