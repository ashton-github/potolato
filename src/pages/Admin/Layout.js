import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../../components/Admin/Header";
import SideMenu from "../../components/Admin/SideMenu";

import  "./admin.css"

const Layout = () => {
    return (
        <div className="Layout">
            <Header/>
            <div id="admin">
                <SideMenu/>
                <div id="admin_body">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
