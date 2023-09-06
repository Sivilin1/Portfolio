
import { faker } from '@faker-js/faker';
require('cypress-xpath');
const randomText = faker.random.alphaNumeric(20);
describe('Players page ', () => {
    it('POSITION HEIGHT', () => {
      cy.viewport(1366, 768)
      cy.visit('https://qa-tes.wdscode.guru/');
      cy.xpath(`//header[@id='header']//img[@alt='Test Task']`).click()
      cy.url().should('eq', 'https://qa-tes.wdscode.guru/')

        //Header menu
      // cy.get('#header > .menu-container')
      // .should('contain', 'Home').should('be.visible')
      // .should('contain', 'About').should('be.visible')
      // .should('contain', 'Products').should('be.visible')
      // .should('contain', 'Testimonials').should('be.visible')
      // .should('contain', 'Contact').should('be.visible')

        // Image guy
      // cy.get('#about > .section > .img > img').should('be.visible')

        // Block John Doe
      // cy.xpath(`//h1[normalize-space()='John Doe']`)
      // .should('be.visible')
      // .should('contain', 'John Doe')

      // cy.get('#about > .section > .desc > p')
      // .should('be.visible')

      // cy.get('#about > .section > .desc > button')
      // .should('be.visible')
      // .should('contain', 'Free Seo Consulting Training')

        //Block Superstar Seo
      cy.xpath(`(//h3[normalize-space()='Superstar Seo'])[1]`)
      .should('be.visible')
      .should('contain', 'Superstar Seo')

      cy.get('#products > .section > .desc > p')
      .should('be.visible')
      
      cy.get('#products > .section > .desc > button')
      .should('be.visible')
      .should('contain', 'Learn More')

      //Comments slider
      cy.get('.arr-prev').click()
      cy.get('.center > .item > .item-container > .text > .name > b').should('be.visible')

      //Block Get in Touch
      cy.get('.contact-form > .name').type(faker.name.firstName())
      cy.get('.email').type('emailAddress@rexbox.org');
      cy.get('.message').type(randomText);
      cy.get('.contact-form > button').click()
      cy.wait(2000); 
    cy.request('POST', 'https://qa-tes.wdscode.guru/wp-admin/admin-ajax.php?action=send_mail')
      .its('body')
      .should('not.be.empty')

      
    
      })
    })

