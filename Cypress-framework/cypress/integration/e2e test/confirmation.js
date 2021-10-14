describe('Handling confirmations tests', () => {
  it('Visit my web app automation site', function () {
    cy.visit('http://localhost:8080/modal-test/index.html');

    // Assertion to confirm the correct url was visited
    cy.url().should('include', 'localhost:8080/modal-test');
    cy.wait(3000);
  });

  // Button 1 tests follows below

  it('should trigger a confirmation window with a message', () => {
    cy.get('#button-1').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Are you sure you want to continue?');
      //return true
    });
    cy.contains('Yes').click();

    cy.get('#result').contains('You just clicked "Yes".');
  });

  it('should trigger a confirmation window with a message', () => {
    cy.get('#button-1').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Are you sure you want to continue?');
      return false;
    });
    cy.contains('Cancel').click();

    cy.get('#result').contains('You just clicked "Cancel".');
  });

  // Button 2 tests follows below

  it('should trigger a confirmation window with a message', () => {
    cy.get('#button-2').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.contains(
        'Are you sure you want to continue - this is the message for the second button?'
      );
      //return true
    });
    cy.contains('Yes').click();

    cy.get('#result').contains('You just clicked "Yes".');
  });

  it('should trigger a confirmation window with a message', () => {
    cy.get('#button-2').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.contains(
        'Are you sure you want to continue - this is the message for the second button?'
      );
      return false;
    });
    cy.contains('Cancel').click();

    cy.get('#result').contains('You just clicked "Cancel".');
  });
});
