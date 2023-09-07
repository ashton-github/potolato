import React from 'react';
import {Routes, Route} from "react-router-dom";
import Error from "../../_utils/Error/Error";
import Login from "./Login";

const AuthRoute = () => {
    return (
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AuthRoute;
