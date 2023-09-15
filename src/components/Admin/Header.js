import React from 'react';
import {account_services} from "../../Services";
import { useNavigate } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();
    const logout = () => {
      account_services.logout();
        navigate("/");
    }
    return (
        <div className="admin_header">
            admin_header

            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Header;
