class accountPage {

    navigateToMyAccount() {
        cy.visit('https://shop.demoqa.com/my-account/')
    }

    clickLostPassword() {
        this.elements.lostPasswordButton().click()
    }

    elements = {
        lostPasswordButton: () => cy.get('a').contains('Lost your password?')
    }
}

module.exports = new accountPage()