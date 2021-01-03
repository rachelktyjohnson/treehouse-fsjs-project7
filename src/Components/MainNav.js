import React from 'react';
import {NavLink} from 'react-router-dom';

export const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/search/cats'>Cats</NavLink></li>
                <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/search/rabbits'>Rabbits</NavLink></li>
                <li><NavLink to='/search/turtles'>Turtles</NavLink></li>
                <li><NavLink to='/search/elephants'>Elephants</NavLink></li>
            </ul>
        </nav>
    )
}