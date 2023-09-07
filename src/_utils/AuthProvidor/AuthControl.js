import React from 'react';
import { Navigate } from "react-router-dom"

const AuthControl = (props) => {
    const {children} = props;

    let logged = true;

    if (!logged){
        return <Navigate to="/auth/login" />
    }
    return  children
};

export default AuthControl;
