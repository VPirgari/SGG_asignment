class PracticeBase{
    get practiceLogo(){
        return cy.get("[aria-label='SUT']", { timeout: 2000});
    }
    get alert() {
        return cy.get("[id='flash']>b", { timeout: 2000});
    }
    closeAlert(){
        cy.get("[id='flash']>button[aria-label='Close']", { timeout: 2000}).click();
    }
}


class LoginPage extends PracticeBase{
    get userName() {
        return cy.get('#username', { timeout: 2000})
    }
    get password() {
        return cy.get('[name="password"]', { timeout: 2000})
    }
    get submit() {
        return cy.get("button[type='submit']", { timeout: 2000})
    }
}

const loginPage = new LoginPage();


class Auth extends LoginPage{
    login(user_name,password){
        auth.userName.type(user_name);
        auth.password.type(password);
        auth.submit.click();
    }

    logout() {
        securePage.logOut.click();
    }

}

const auth = new Auth();


class SecurePage extends PracticeBase{
    get logOut(){
        return cy.get("a[href='/logout'] > i", { timeout: 2000});
    }
}

const securePage = new SecurePage();


module.exports = {
    loginPage,
    auth,
    securePage
}