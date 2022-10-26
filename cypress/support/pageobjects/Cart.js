import Catalog from "./Catalog";
import Page from "./Page"

class Cart extends Page{

    changeProductQuantityByClick(value){
        let delta
        cy.xpath("//input[@class='Quantity_input__yBzs3']")
        .then(($element) => {
            delta = $element.val() - value
            const selector = (delta<0)
            ? "//button[@class='Quantity_actions__C9fVt'][3]"
            : "//button[@class='Quantity_actions__C9fVt'][2]"
        cy.multiClick(selector, Math.abs(delta));
        })  
    }
    verifyTotalPriceIsCorrect(price){
        // method can be chaged for automation calculate a total price
        cy.xpath("//div[@class='Sidebar_sidebar__7UX4L']//span[contains(text(),'Total')]/following-sibling::span").should('have.text', `\$${price}`);
    }

    closeCartMenu(){
        cy.xpath("//button[@aria-label='Close']").click();
    }

    verifyProductsInCart(products){
        cy.xpath("//span[contains(@class,'CartItem_productName')]")
            .then(($elements) => {
                return Cypress.$.makeArray($elements).map((el)=>el.innerText);
            })
            .should('deep.equal', products);
    }

    verifyParametrForProduct(param, value, product){
        cy.xpath(`//div[a[span[contains(text(), "${product}")]]]//div[contains(text(),"${param}")]/span`).should('have.text', value);
    }

    proceedToCheckout(){
        cy.get("a[class='Button_root__G_l9X']").click();
    }

}

export default Cart