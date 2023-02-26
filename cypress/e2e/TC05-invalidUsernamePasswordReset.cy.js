import homePage from '../pages/home-page'
import accountPage from '../pages/account-page'
import lostPasswordPage from '../pages/lostPassword-page'

describe('Test Case 05', () => {
    it('Password Reset with invalid credentials', () => {
        homePage.navigateToSite()
        homePage.clickOnDismiss()
        homePage.clickOnMyAccount()
        //accountPage.navigateToMyAccount() // Alternate way to get to "My Accounts" page. I had problems with dismiss message not always displaying, so if that's the case, uncomment this line and comment the two lines above.
        accountPage.clickLostPassword()
        lostPasswordPage.enterUsername("QmLcKjHr") //We're entering a non-existing username to request a password reset.
        lostPasswordPage.clickResetPassword()
        lostPasswordPage.messageValidation() // This is the step where the test SHOULD fail. It checks whether the wrong error message is displayed. And since this Test Case has a bug, it will always display the wrong message, thus the test will fail. Since it is impossible to get the proper error message, I think this is the second-best way of verification.
    })
})

