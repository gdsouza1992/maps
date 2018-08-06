import * as React from 'react';
import ProfileCard from "../ProfileCard/index";

import './style.css';

const Header = () => {
    return (
        <header className="layout-wrapper header">
            <h3>Blog it!</h3>
            <ProfileCard />
        </header>
    );
}


export default Header;
