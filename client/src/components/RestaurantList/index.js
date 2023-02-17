import { useEffect } from 'react';
import React, { Component } from 'react';


// export default function RestaurantList({ loadRestaurants, restaurants }) {
//     useEffect(() => {
//         loadRestaurants();
//     }, [loadRestaurants]);

//     return (
//         <ul>
//             {restaurants.map(restaurant => (
//                 <li key={restaurant.id}>{restaurant.name}</li>
//             ))}
//         </ul>
//     );
// }

const RestaurantList = ({loadRestaurants, restaurants}) => {
    useEffect(() => {
        loadRestaurants();
    }, [loadRestaurants]);

    return(        
        <ul>
        {restaurants.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
        ))}{' '}
    </ul>);
}

export default RestaurantList;