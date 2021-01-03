import React from 'react';
import {NavLink} from 'react-router-dom';

export const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats'>Cats</NavLink></li>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/rabbits'>Rabbits</NavLink></li>
            </ul>
        </nav>
    )
}