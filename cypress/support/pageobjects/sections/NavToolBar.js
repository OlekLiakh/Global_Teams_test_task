import Catalog from "../Catalog"

class NavToolBar{    

    navigateToPageFromMenu(pageName){
        cy.xpath(`//a[contains(text(), "${pageName}")]`).click();
    };

}

export default NavToolBar;