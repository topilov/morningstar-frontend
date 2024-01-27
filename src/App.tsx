import {Route, Routes} from "react-router-dom";
import React from "react";
import AdminRoute from "./route/admin.route";
import HomePage from "./page/home/home.page";
import LoginPage from "./page/auth/login.page";
import RegisterPage from "./page/auth/register.page";
import "./app.css"

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminRoute />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default App;

