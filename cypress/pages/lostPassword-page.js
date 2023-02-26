class lostPasswordPage {

    enterUsername(username) {
        this.elements.userReset().type(username)
    }

    clickResetPassword() {
        this.elements.resetPasswordButton().click()
    }

    messageValidation() {
        this.elements.passwordMessage().should('be.visible')
            .and('not.contain', 'Password reset email has been sent.')
    }


    elements = {
        userReset: () => cy.get('#user_login'),
        resetPasswordButton: () => cy.get('button[type="submit"][class*="woocommerce-Button"][value="Reset password"]'),
        passwordMessage: () => cy.get('div.woocommerce-message')

    }
}

module.exports = new lostPasswordPage()