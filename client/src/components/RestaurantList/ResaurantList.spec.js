import { render, screen } from '@testing-library/react';
import RestaurantList from './index';
import React from 'react';
import '@testing-library/jest-dom';

describe('RestaurantList', () => {
    const restaurants = [
        { id: 1, name: 'Sushi Place' },
        { id: 2, name: 'Pizza Place' },
    ];

    let loadRestaurants;

    function renderComponent() {
        loadRestaurants = jest.fn().mockName('loadRestaurants');

        render(
            <RestaurantList
                loadRestaurants={loadRestaurants}
                restaurants={restaurants}
            />,
        );
    }


    it('loads restaurants on first render', () => {
        renderComponent();
        expect(loadRestaurants).toHaveBeenCalled();
    });

    it('displays the restaurants', () => {
        renderComponent();
        expect(screen.getByText('Sushi Place')).toBeInTheDocument();
        expect(screen.getByText('Pizza Place')).toBeInTheDocument();
    });

});