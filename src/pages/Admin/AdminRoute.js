import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout, Dashboard} from "./"
import {User, Add, Edit} from "./User";
import Error from "../../_utils/Error/Error";
import {Product, PAdd, PEdit} from "./Product";

const AdminRoute = () => {
    return (
        <Routes>
            <Route element={<Layout/>} >
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="user" >
                    <Route path="index" element={<User/>} />
                    <Route path="add" element={<Add/>} />
                    <Route path="edit/:userId" element={<Edit/>} />
                </Route>
                <Route path="product" >
                    <Route path="index" element={<Product/>} />
                    <Route path="add" element={<PAdd/>} />
                    <Route path="edit/:productId" element={<PEdit/>} />
                </Route>
                <Route path="*" element={<Error/>} />
            </Route>
            
        </Routes>
    );
};

export default AdminRoute;
