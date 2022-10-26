import NavToolBar from "./sections/navToolBar";

class Page {
    
    constructor() {
        this.navToolBar = new NavToolBar();
        this.url = "https://demo.vercel.store/product/quarter-zip"
    }
    openPage(){
        cy.visit(this.url)
    }
}

export default Page