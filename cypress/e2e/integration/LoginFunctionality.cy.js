
import { auth,loginPage, securePage } from "../../support/pages/Login";
import { navigateTo } from "../../support/pages/Navigation";
import { generateRandomString } from "../../support/utilities/utils";


describe('Login Functionality On Practice', () => {

    beforeEach(() => {
        cy.clearCookies();
        navigateTo.goToLoginPage();
    })


    it('User is able to login with valid credentials', () => {
        cy.fixture('user').then((user) => {
            auth.login(user.user1.username, user.user1.password);
        })

        cy.fixture('loginMessages').then((messages) => {
            securePage.alert.should('have.text', messages.success);
        })

    })


    it('Password input should be hidden on login', () => {
        loginPage.password.type(generateRandomString(Math.floor(Math.random() * 10) + 1));
        loginPage.password.should('have.attr', 'type', 'password');
    })


    it('Input fields should be empty after fail to login', () => {
        const fakeUser = generateRandomString(Math.floor(Math.random() * 10) + 1);
        const fakePass = generateRandomString(Math.floor(Math.random() * 10) + 1);

        auth.login(fakeUser,fakePass);

        loginPage.alert.should('be.visible');

        loginPage.userName.should('be.empty');
        loginPage.password.should('be.empty');
     })


    it('User should see invalid username alert when username is not registered or empty', () => {
        loginPage.submit.click();
        cy.fixture('loginMessages').then((messages) => {
            loginPage.alert.should('have.text', messages.usernameInvalid);
        })

        loginPage.closeAlert();
        loginPage.userName.type(generateRandomString(Math.floor(Math.random() * 10) + 1));
        loginPage.submit.click();

        cy.fixture('loginMessages').then((messages) => {
            loginPage.alert.should('have.text', messages.usernameInvalid);
        })

    })


    it('User should see invalid username alert with valid password and wrong username', () => {
        const fakeUser = generateRandomString(Math.floor(Math.random() * 10) + 1);
        cy.fixture('user').then((user) => {
            auth.login(fakeUser, user.user1.password);
        })
        
        cy.fixture('loginMessages').then((messages) => {
            loginPage.alert.should('have.text', messages.usernameInvalid);
        })
    })


    it('User should see invalid password with valid username and empty/wrong password', () => {
        cy.fixture('user').then((user) => {
            loginPage.userName.type(user.user1.username);
        })
        loginPage.submit.click();

        cy.fixture('loginMessages').then((messages) => {
            loginPage.alert.should('have.text', messages.passwordInvalid);
        })
        
        loginPage.closeAlert();
        cy.fixture('user').then((user) => {
            loginPage.userName.type(user.user1.username);
        })
        loginPage.password.type(generateRandomString(Math.floor(Math.random() * 10) + 1));
        loginPage.submit.click();

        cy.fixture('loginMessages').then((messages) => {
            loginPage.alert.should('have.text', messages.passwordInvalid);
        })
    })



    describe('Login Functionality for logged user', () => {

        beforeEach(() => {
            cy.fixture('user').then((user) => {
                auth.login(user.user1.username, user.user1.password);
            })
        })


        it('User is able to logout from Secure Area', () => {
            auth.logout();
            cy.fixture('loginMessages').then((messages) => {
                loginPage.alert.should('have.text', messages.logout);
            })
        })


        it('User remains logged in after navigating in the app', () => {
            securePage.practiceLogo.click();
            cy.go('back');

            securePage.logOut.should('be.visible');
        })


        it('User sees the alert when trying to navigate to login again', () => {
            navigateTo.goToLoginPage();

            cy.fixture('loginMessages').then((messages) => {
                loginPage.alert.should('have.text', messages.loggedIn);
            })
        })
    })

})
