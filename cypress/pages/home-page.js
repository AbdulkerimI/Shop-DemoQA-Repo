class homePage {

    navigateToSite() {
        cy.visit('https://shop.demoqa.com/')
    }

    clickOnDismiss() {
        this.elements.dismissButton().click()
    }

    clickOnMyAccount() {
        this.elements.myAccountButton().click()
    }

    elements = {
        myAccountButton: () => cy.get('a[href="https://shop.demoqa.com/my-account/"]').contains('My Account'),
        dismissButton: () => cy.get('a[href="#"][class="woocommerce-store-notice__dismiss-link"]').contains('Dismiss')


    }
}

module.exports = new homePage()