
describe('Calculation', () => {
  const dirtyhack = "007"
    it('Equivalent class', () => {
      cy.viewport(1366, 768)
      cy.visit('http://qa-test.sport.ua/');
      cy.get('[type="text"]').type(9)
      cy.get('[type="submit"]').click()
      cy.get('.error').should('contain', '81').should('be.visible')
      cy.get('[type="reset"]').click()

      cy.wait(2000)
      cy.get('[type="text"]').type(-9)
      cy.get('[type="submit"]').click()
      cy.get('.error').should('contain', '-81').should('be.visible')
      cy.get('[type="reset"]').click()
      cy.wait(2000)
         })

         it('Analysis of boundary results', () => {
          cy.get('[type="text"]').type(3.2)
          cy.get('[type="submit"]').click()
          cy.get('.error').should('contain', '10.240000000000002').should('be.visible')
          cy.get('[type="reset"]').click()

        
          cy.wait(2000)
          cy.get('[type="text"]').type(-2.3)
          cy.get('[type="submit"]').click()
          cy.get('.error').should('contain', '-5.289999999999999').should('be.visible')
          cy.get('[type="reset"]').click()
             })

             it('Error Guessing', () => {
              cy.get('[type="text"]').type('!')
              cy.get('[type="submit"]').click()
              cy.get('.error').should('contain', 'non numeric').should('be.visible')
              cy.get('[type="reset"]').click()
        })
      })

