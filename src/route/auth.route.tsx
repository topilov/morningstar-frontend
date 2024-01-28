import { Route } from "react-router-dom";
import React from "react";
import LoginPage from "../page/auth/login.page";
import RegisterPage from "../page/auth/register.page";

const authRoutes = () => {
    return (
        <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </>
    );
};

export default authRoutes;