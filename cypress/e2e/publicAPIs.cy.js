const url = 'https://api.publicapis.org/entries'

describe('API testing for symphony', () => {
    
    it('should get all objects with auth', () => {
      cy.request('GET', url).then((response) => {

        expect(response.status).to.equal(200);

        const entries = response.body.entries;
        const entriesWithNotEmptyAuth = entries.filter(entry => entry.Auth != '');

        // Verify the count of objects with a not empty Auth property
        const countOfEntriesWithNotEmptyAuth = entriesWithNotEmptyAuth.length;
        expect(countOfEntriesWithNotEmptyAuth).to.be.greaterThan(0);

        // Log the found objects to console
        if (countOfEntriesWithNotEmptyAuth > 0) {
          cy.log('Objects with value in Auth property:');
          cy.log(entriesWithNotEmptyAuth);
        }

      })
    })
    
})
