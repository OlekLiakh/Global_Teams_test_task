import Cart from "./Cart";
import Page from "./Page";

class ProductCard extends Page{

    addProductToCart(){
        cy.xpath("//button[@aria-label='Add to Cart']").click()
        return new Cart()
    }
    selectSize(size){
        cy.xpath(`//button[@aria-label='size ${size.toLowerCase()}']`).click()
        return this
    }
}

export default ProductCard