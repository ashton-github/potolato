import React from 'react';
import {Link} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <header className="public_header">
            <nav>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/service">service</Link></li>
            </nav>
        </header>
    );
};

export default Header;
