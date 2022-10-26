import CheckoutPage from "./CheckoutPage"

class Cart {

    selectors = {
        closeCartButton: "//button[@aria-label='Close']",
        productList: "//span[contains(@class,'CartItem_productName')]",
        quantityInput: "//input[@class='Quantity_input__yBzs3']",
        plusButton: "//button[@class='Quantity_actions__C9fVt'][3]",
        minusButton: "//button[@class='Quantity_actions__C9fVt'][2]",
        checkoutButton: "a[class='Button_root__G_l9X']",
        price: type => `//div[@class='Sidebar_sidebar__7UX4L']//span[contains(text(),'${type}')]/following-sibling::span`,
        productParam: (param, product) => `//div[a[span[contains(text(), "${product}")]]]//div[contains(text(),"${param}")]/span`
    }

    changeProductQuantityByClick(value){
        let delta
        cy.xpath(this.selectors.quantityInput)
            .then(($element) => {
                delta = $element.val() - value
                const selector = (delta<0) 
                ? this.selectors.plusButton : this.selectors.minusButton 
                cy.multiClick(selector, Math.abs(delta))
            })
        return this      
    }
    verifyTotalPriceIsCorrect(price){
        // method can be chaged for automation calculate a total price
        cy.xpath(this.selectors.price('Total')).should('have.text', `\$${price}`)
        return this
    }

    closeCartMenu(){
        cy.xpath(this.selectors.closeCartButton).click()
    }

    verifyProductsInCart(products){
        cy.xpath(this.selectors.productList)
            .then(($elements) => {
                return Cypress.$.makeArray($elements).map((el)=>el.innerText);
            })
            .should('deep.equal', products)
        return this
    }

    verifyParametrForProduct(param, value, product){
        cy.xpath(this.selectors.productParam(param, product)).should('have.text', value)
        return this
    }

    proceedToCheckout(){
        cy.get(this.selectors.checkoutButton).click()
        return new CheckoutPage()
    }

}

export default Cart