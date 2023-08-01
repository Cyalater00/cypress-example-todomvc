describe('template spec', () => {
    beforeEach(() => {
        // Correct the URL to have double slashes after 'http:'
        cy.visit('http://localhost:8888');
    });

    it('should add three todo items', () => {
        // Type three different todo items one by one
        cy.get('.new-todo').type('Make every second count{enter}');
        cy.get('.new-todo').type('Invest in yourself{enter}');
        cy.get('.new-todo').type('Learn Cypress{enter}');
        // Check if there are three todo items in the list
        cy.get('.todo-list').children().should('have.length', 3);

        //Mark ‘Learn Cypress’ as complete.
        cy.contains('.todo-list li', 'Learn Cypress').parent().find('.toggle').check();

        //Test that the items render and valid the text.  
        cy.get('.todo-list li').eq(0).should('contain', 'Make every second count');
        cy.get('.todo-list li').eq(1).should('contain', 'Invest in yourself');
        cy.get('.todo-list li').eq(2).should('contain', 'Learn Cypress');

        //Test that ‘Learn Cypress’ has been marked complete.
        cy.contains('.todo-list li', 'Learn Cypress').parent().find('.toggle').should('be.checked');
    });
});
