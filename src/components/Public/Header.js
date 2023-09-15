import React, {useState} from 'react';
import {Link} from "react-router-dom";

import './Header.css'
import {account_services} from "../../Services";

const Header = () => {

    const [isLgged, setIsLgged] = useState(account_services.isLgged());
    const logout = () => {
      localStorage.clear();
        setIsLgged(account_services.isLgged());
    }
    return (
        <header className="public_header">
            <nav>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/service">service</Link></li>
                {!isLgged? <li><Link to="/auth">Login</Link></li> : <li><Link to="/home" onClick={logout}>Logout</Link></li>}
            </nav>
        </header>
    );
};

export default Header;
