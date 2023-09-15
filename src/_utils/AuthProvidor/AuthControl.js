import React from 'react';
import { Navigate } from "react-router-dom"
import {account_services} from "../../Services";

const AuthControl = (props) => {
    const {children} = props;

    if (!account_services.isLggedAsAdmin()){
        return <Navigate to="/auth/login" />
    }
    return  children
};

export default AuthControl;
