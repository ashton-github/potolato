import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../components/Public/Header";

const Layout = () => {
    return(
        <div className="layout">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;