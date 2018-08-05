import * as React from 'react';
import ProfileCard from "../ProfileCard/index";

import './style.css';

const Header = () => {
    return (
        <header className="header">
            <h3>Header text goes here</h3>
            <ProfileCard />
        </header>
    );
}


export default Header;
