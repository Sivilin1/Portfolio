describe('Creating a board', () => {    
  it('should create a board', () => {
      cy.request({
      method : 'GET',
      url:`https://www.example.com/getfeed/1844d39a1583479c1adc08d8e54db718/football/nfl-scores?date=01.01.2023&json=1`, 
      }).then((response) => {
       expect(response).property('status').to.equal(200)
      expect(response.body.scores.category.match[0].awayteam).property('name').to.eq("Arizona Cardinals")
      expect(response.body.scores.category.match[0].awayteam).property('totalscore').to.eq('19')  
      })
      .as('Score')
  })
})