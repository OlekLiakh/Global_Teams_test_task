import Page from "./Page"

class Catalog extends Page{

    selectProduct(product){
        cy.xpath(`//a[@aria-label="${product}"]`).click();
    }
}

export default Catalog