import { faker } from '@faker-js/faker';
describe('Mag Store ', () => {
    it('Page registration', () => {
      cy.viewport(1366, 768)
      cy.visit('https://example.com/');
      cy.get('.site-header__icons > .site-header__account > img').click()
      cy.get('#customer_register_link').click()
    })
    
    const password = "12345678";
      const faker = require("faker");
      it('can generate a new data and sign up', () => {
          // sign up with inbox email address and the password and fill fields
          cy.get('#RegisterForm-FirstName').type(faker.name.firstName()).as('FirstName')
          cy.get('#RegisterForm-LastName').type(faker.name.lastName()).as('LastName')
          cy.get('#RegisterForm > #RegisterForm-email').type(faker.internet.email())
          cy.get('#RegisterForm-password').type(password)
          cy.get('.text-center > .btn').click()
          cy.get('.section-header > .btn')
        
  })
})
