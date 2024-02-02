import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {navigateAdminPage} from "../admin/adminDestination";
import {navigateLoginPage, navigateRegisterPage} from "../auth/authDestination";
import {useAuth} from "../../auth/authContext";
import {UserRole} from "../../entity/user";
import {navigateContentPage} from "../content/contentDestination";
import {TopBar} from "../../components/TopBar";
import {Box, CssBaseline} from "@mui/material";

const Root = () => {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigateAdminPage(navigate)
    }

    const handleLoginClick = () => {
        navigateLoginPage(navigate)
    }

    const handleRegisterClick = () => {
        navigateRegisterPage(navigate)
    }

    const handleContentClick = () => {
        navigateContentPage(navigate)
    }

    const {user, isLoading, isLoaded, logoutHandler} = useAuth()

    const logoutClick = () => {
        logoutHandler()
    }

    if (isLoading) {
        return (
            <CssBaseline>
                <div>Loading...</div>
            </CssBaseline>)
    }

    return (
        <CssBaseline>
            <TopBar/>
            <Outlet/>
        </CssBaseline>
    )
}

export default Root;