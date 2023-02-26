# Shop-DemoQA-Repo Abdulkerim Isanović
This repository is my solution for the task presented to me. I wrote and ran a series of test cases to thoroughly test the https://shop.demoqa.com website. 
I have decided to automate a test regarding the password reset funcionality on the "My Account" page. This test case is labeled as TC05 in documentation (Login functionality sheet), and running it results in a bug. Users can request password resets with false usernames and emails which this test simulates, and this SHOULD NOT happen.

Test Documentation: https://drive.google.com/drive/folders/1YK7LtaWThXTk4tLprfnnuZZJ3Ltk-9OU?usp=sharing

I used Cypress in IntelliJ Idea IDE, on windows 10 OS to run this test.

To open it, you will need to install following:
  - Node.Js You can get it here: https://nodejs.org/en/download/ 
  - IDE of your choice, mine is IntelliJ idea: https://www.jetbrains.com/idea/download/#section=windows (you can use ultimate edition with a free trial)
  - Cypress automation framework: https://docs.cypress.io/guides/getting-started/installing-cypress (if you cannot run it through terminal, 
    download it manually, run .exe file and simply drag and drop the project root folder from your IDE to start testing)

Run IntelliJ and start a new project from version control https://prnt.sc/vNGhBgXFNV4S
On next page, make sure version is set to git, and copy the following URL into the URL box: https://github.com/AbdulkerimI/Shop-DemoQA-Repo.git 
Click "Clone" (https://prnt.sc/mEAvT8aGCPAx)

Once the project is properly cloned, now you need to run Cypress. Open the terminal and use the command "npx cypress open". 
If cypress didn't install properly, you will get an error message in the terminal. In this case, use npm install cypress --save-dev command to reinstall it.

If this doesn't work, download cypress manually from https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download 
Extract the files, and run cypress.exe file https://prnt.sc/lKcPY6xww8a0 Once cypress is opened, you will be presented with the following screen https://prnt.sc/IyJOV0MfKnaT
Simply drag and drop the whole root project folder from your IDE (IntelliJ in this case, like this https://prnt.sc/5oBdZIj4CAdK) and that should be it.

If cypress is installed properly, this window will open https://prnt.sc/HrDeFwkaWJiL
From there, select E2E (end to end testing), select the browser of your choice (I tested it in chrome and edge, works perfectly) and click "Start E2E Testing"
This screen should open: https://prnt.sc/0I8EaB2mkl0p From here, select the TC05-invalidUsernamePasswordReset and run it. 

Test Case 05 tests a password reset functionality which has a bug in it, and it SHOULD fail at the last step, which is verification. Consult the test cases and the bug report for more details. 



