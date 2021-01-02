import React from 'react';
import {Link} from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <li className="not-found">
            <h3>Oops! 404 Page Not Found</h3>
            <p>You seem to have found a glitch in the matrix... <Link to="/">go home</Link>!</p>
        </li>
    )
}