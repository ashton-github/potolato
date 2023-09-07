import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRoute from "./pages/Public/PublicRoute";
import AdminRoute from "./pages/Admin/AdminRoute";
import AuthRoute from "./pages/Auth/AuthRoute";
import AuthControl from "./_utils/AuthProvidor/AuthControl";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<PublicRoute/>} />
              <Route path="/admin/*" element={
                  <AuthControl>
                      <AdminRoute/>
                  </AuthControl>
              } />
              <Route path="/auth/*" element={<AuthRoute/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
