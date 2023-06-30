
describe('Players page ', () => {
    it('POSITION HEIGHT', () => {
      const password = "12345678";
      let inboxId;
      let emailAddress = 'Pay@rover.info'
      cy.viewport(800, 600)
      cy.visit('https://example/account/login')
      cy.get('input[name=user]').type(emailAddress)
      cy.get('input[name=password]').type(password)

      cy.get('.form-btn').click()
      cy.get('.dashboard__nav-link').contains('Profile Settings').click()
      cy.get('.db-nav-tabs__items').contains('Payments & Subscriptions').click()
      cy.wait(1000)
      cy.get('.dashboard__submit-btn').contains('Upgrade to Prospect360').click()
      cy.get('.tariff-card__main').contains(' Subscribe Now ').click()
      cy.get('.btn-green').click()

      cy.get('input[name=ssl_last_name]').type('LastName')
      cy.get('input[name=ssl_avs_address]').type('Pay@rover.info')
      cy.get('input[name=ssl_avs_zip]').type('5666')
      cy.get('input[name=ssl_card_number]').type('7000000000000003')
      cy.get('input[name=ssl_exp_date]').type('1224')
      cy.get('input[name=ssl_cvv2cvc2]').type('777')
      cy.get('.form-btn').click()
      
    })
  })
  

