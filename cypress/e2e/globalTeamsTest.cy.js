import Catalog from "../support/pageobjects/Catalog";
import MainPage from "../support/pageobjects/MainPage";
// import ProductCard from "../support/pageobjects/ProductCard";
// import Cart from "../support/pageobjects/Cart";
// import CheckoutPage from "../support/pageobjects/CheckoutPage";

describe('Test', () => {
    
    before (function () {
        cy.fixture('URL').then(function(URL) {
            this.URL = URL
        });
        cy.fixture('userData').then(function(userData) {
            this.userData = userData
        });
    })
   
    it('Test', function () {
        const mainPage = new MainPage()
        const catalog = new Catalog()
        // const productCard = new ProductCard()
        // const cart = new Cart()
        // const checkout = new CheckoutPage()

        cy.log("Go to https ://demo.vercel.store")
        mainPage.openPage();

        cy.log('Go to New Arrivals -> ACME Cup')
        mainPage.navToolBar.navigateToPageFromMenu("New Arrivals");

//         cy.log('Add ACME Cup to the Cart')
//         catalog.selectProduct("ACME Cup")
//         productCard.addProductToCart()

//         cy.log('Change it quantity to 5 items')
//         cart.changeProductQuantityByClick(5)

//         cy.log('Verify that total price is correct (should be cup count * 25)');
//         cart.verifyTotalPriceIsCorrect("125.00")

//         cy.log('Close cart menu')
//         cart.closeCartMenu()

//         cy.log("Go to Featured → Quarter Zip")
//         productCard.navToolBar.navigateToPageFromMenu("Featured")
//         catalog.selectProduct("Quarter Zip")

//         cy.log("Select M Size and add to cart")
//         productCard.selectSize("M")
//         productCard.addProductToCart()

//         cy.log("Verify that Both articles are present in the cart")
//         cart.verifyProductsInCart(['Quarter Zip', 'ACME Cup'])

//         cy.log("Verify that Quarter Zip is exactly M size")
//         cart.verifyParametrForProduct("Size", "M", "Quarter Zip")
 
//         cy.log("Verify that total price in cart is correct")
//         cart.verifyTotalPriceIsCorrect("215.00")

//         cy.log("Proceed to checkout")
//         cart.proceedToCheckout()

//         cy.log("Fill form with random values")
//         checkout.fillForm(this.userData)

//         cy.log("Proceed to checkout")
//         checkout.clickSubmitButton()

//         cy.log("Select second payment method (USPS Priority Mail International)")
//         checkout.selectShippingMethod("USPS Priority Mail International")

//         cy.log("Click Continue to payment")
//         checkout.clickSubmitButton()

//         cy.log("Verify presence of text: This store can’t accept payments right now.'")
//         checkout.verifyMessage("CANT_ASSEPT_PAYMENT")
    })
})


    //     cy.request('GET', CART3).then((response) => {
    //         // pull out the location redirect
    //         const link = response.redirects[1].substring(5,95).toString();
    //         console.log(link);
    //         cy.task('setMyUniqueId', myUniqueId);
    //     });
    // });
    // it('Test2', () => {
// cy.xpath("//a[contains(text(),'Proceed to Checkout')]").click();
        // cy.xpath("//input[contains(@placeholder,'Email or mobile phone number')]").type("email@email.com");
        // cy.xpath("//div[@data-address-field='first_name']//input").type("First name");
        // cy.visit(link)
        // cy.origin(resultat, () => {
            // cy.task('getMyUniqueId').then((link) => {
            // console.log(link);
            // cy.visit(link);
            // })
 