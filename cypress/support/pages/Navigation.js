export class NavigateTo{
    goToLoginPage(){
        cy.visit(Cypress.env('login'));
    }
}

export const navigateTo = new NavigateTo();