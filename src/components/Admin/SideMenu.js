import React from 'react';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <div className="SideMenu">
            <ul>
                <li><Link to="/">Accueil</Link>  </li>
                <li>&nbsp;</li>
                <li><Link to="/admin/dashboard">Dashboard</Link>  </li>
                <li>
                    User
                    <ul>
                        <li><Link to="/admin/user/index">Liste</Link>  </li>
                        <li><Link to="/admin/user/add">Ajouter</Link>  </li>
                    </ul>
                </li>
                <li>
                    Product
                    <ul>
                        <li><Link to="/admin/product/index">Liste</Link>  </li>
                        <li><Link to="/admin/product/add">Ajouter</Link>  </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
