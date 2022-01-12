describe("log in", function() {
    it("Sing in", function() {
        cy.visit("https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all")
        cy.wait(1000)
        cy.get('[title="Click to see the content of the Customers table"]').click()
        cy.wait(3000)
        cy.get('.CodeMirror pre').type('WHERE CustomerID BETWEEN  \'3\' AND \'7\'{enter}limit 5;')
        cy.wait(1000)
        cy.get('.ws-btn').click();
    })
})