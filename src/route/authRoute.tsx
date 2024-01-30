import { Route } from "react-router-dom";
import React from "react";
import LoginPage from "../page/auth/loginPage";
import RegisterPage from "../page/auth/registerPage";

const authRoutes = [
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
];

export default authRoutes;