describe("Log in", function() {
    it("Sing in", function () {
        cy.visit('http://www.bastion.com.ua/')
        cy.wait(2000)
        cy.get('[type="text"]').type("3333@email.ua")
        cy.get('[type="password"]').type("33333")
        cy.get('[type="submit"]').click()


        })
    })
