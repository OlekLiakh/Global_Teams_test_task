class CheckoutPage {
    selectors = {
        submitButton: "//button[@type='submit']",
        
        // information
        emailInput: "//input[contains(@placeholder,'Email or mobile phone number')]",
        firstNameInput: "//div[@data-address-field='first_name']//input",
        lastNameInput: "//div[@data-address-field='last_name']//input",
        addressInput: "//div[@data-address-field='address1']//input",
        apartmentInput: "//div[@data-address-field='address2']//input",
        cityInput: "//div[@data-address-field='city']//input",
        zipInput: "//div[@data-address-field='zip']//input",

        //shipping
        shippingSelector: method => `//fieldset//div[contains(.//span, '${method}')]//div[@class='radio-wrapper']`,
        
        // payment
        message: "//div[@class='blank-slate']/p"
    }
    messages = {
        CANT_ASSEPT_PAYMENT: "This store can’t accept payments right now."
    }

    clickSubmitButton(){
        cy.xpath(this.selectors.submitButton).click({force: true})
        return this
    }

    // information
    fillForm(data){
        cy.xpath(this.selectors.emailInput).type(data.email)
        cy.xpath(this.selectors.firstNameInput).type(data.firstName)
        cy.xpath(this.selectors.lastNameInput).type(data.lastName)
        cy.xpath(this.selectors.addressInput).type(data.address)
        cy.xpath(this.selectors.apartmentInput).type(data.apartment)
        cy.xpath(this.selectors.cityInput).type(data.city)
        cy.xpath(this.selectors.zipInput).type(data.zip)
        return this

    }

    // shipping
    selectShippingMethod(method){
        cy.xpath(this.selectors.shippingSelector(method)).click()
        return this
    }

    // payment
    verifyMessage(message){
        cy.verifyMessage(this.selectors.message, this.messages[message])
        return this
    }

}

export default CheckoutPage