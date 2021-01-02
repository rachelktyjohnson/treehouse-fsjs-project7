import React from 'react';
import {SearchForm} from "./SearchForm";
import {MainNav} from "./MainNav";

export const Header = () => {
    return (
        <header className="header">
            <SearchForm/>
            <MainNav/>
        </header>
    )

}