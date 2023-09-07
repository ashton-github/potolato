import React from 'react';
import {Route, Routes} from "react-router-dom";

import Error from "../../_utils/Error/Error";
import { Layout, Home, Contact, Service} from "./"

const PublicRoute = () => {
    return (

        <Routes>
            <Route element={<Layout/>}>

                <Route index  element={<Home/>} />

                <Route path="/home" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/service" element={<Service/>} />

                <Route path="*" element={<Error/>} />

            </Route>

        </Routes>
    );
};

export default PublicRoute;
