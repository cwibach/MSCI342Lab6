describe('Listing Restaurants', () => {
    it('shows restaurants from the server', () => {
        const sushiPlace = 'Sushi Place';
        const pizzaPlace = 'Pizza Place';

        // API : VM7eOOZXnf6p4d7r1kEEjflUWtYuB8WB
        cy.intercept('GET', 'https://api.outsidein.dev/*/restaurants', [
            { id: 1, name: sushiPlace },
            { id: 2, name: pizzaPlace },
        ]);
        cy.visit('/');
        cy.contains(sushiPlace);
        cy.contains(pizzaPlace);
    });
});
