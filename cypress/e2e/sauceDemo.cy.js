describe('SauceDemo Sorting Test', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      // Log in using credentials
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
    })
  
    it('Should verify items are sorted by Name (A -> Z)', () => {
      cy.get('.inventory_item_name')
        .then($items => {
          const itemNames = [...$items].map(item => item.innerText.toLowerCase())
          const sortedItemNames = [...itemNames].sort()
  
          expect(itemNames).to.deep.equal(sortedItemNames)
        })
    })
  
    it('Should change sorting to Name (Z -> A) and verify items are sorted correctly', () => {
      // Change sorting to Name (Z -> A)
      cy.get('.product_sort_container').select('za')
  
      // Verify the items are sorted by Name (Z -> A)
      cy.get('.inventory_item_name')
        .then($items => {
          const itemNames = [...$items].map(item => item.innerText.toLowerCase())
          const sortedItemNames = [...itemNames].sort().reverse() // Reverse for Z -> A
  
          expect(itemNames).to.deep.equal(sortedItemNames)
        })
    })
  })