
describe('Post BTC', () => {

  const email = 'sivilin.com@gmail.com'
  const password = '1234567890Q!q'
  let apiKey = '5a70147f-ee4e-4d36-aae0-d9e0ec03f839'
  let symbol = 'btc'

    // Authorization
    it('Page SignIn', () => {
      cy.viewport(1280, 720)
      cy.visit('https://www.getblock.io/')
      cy.get('.account-button').should('by.visible').click()
      cy.get('[data-testid="signInEmailButton"]').should('by.visible').click()
      
    // User data
      cy.get('[type="email"]').type(email)
      cy.get('[type="password"]').type(password)
      cy.contains('Continue').click()
    })

    //Body data
    it('Request and check response status and data', () => {
      const requestBody = {
        "jsonrpc": "2.0",
        "id": "healthcheck",
        "method": "getmininginfo",
        "params": []
      };
  
    // Sending a request
      cy.request({
        method: 'POST',
        url: `https://${symbol}.getblock.io/mainnet/`,
        headers: {
          'x-api-key': apiKey
        },
        body: requestBody,
      })

    // Getting an response
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('result')
        expect(response.body.result.blocks).to.not.eq(0);
        expect(response.body.result.currentblocktx).to.not.eq(0)
        expect(response.body.result.currentblockweight).to.not.eq(0)
        expect(response.body.result.difficult).to.not.eq(0)
        expect(response.body.result.networkhashps).to.not.eq(0)
        expect(response.body.result.pooledtx).to.not.eq(0)
        
        cy.log(response.body)
      })
      
  })
})

 