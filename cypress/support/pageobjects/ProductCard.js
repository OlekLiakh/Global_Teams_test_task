import Cart from "./Cart";
import Page from "./Page";

class ProductCard extends Page{

    addProductToCart(){
        cy.xpath("//button[@aria-label='Add to Cart']").click();
    }
    selectSize(size){
        cy.xpath(`//button[@aria-label='size ${size.toLowerCase()}']`).click();

    }
}

export default ProductCard