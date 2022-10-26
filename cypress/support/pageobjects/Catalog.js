import Page from "./Page"
import ProductCard from "./ProductCard"

class Catalog extends Page{

    constructor() {
        super()
        super.url = "https://demo.vercel.store/search"
    }
    
    selectProduct(product){
        cy.xpath(`//a[@aria-label="${product}"]`).click()
        return new ProductCard()
    }
}

export default Catalog