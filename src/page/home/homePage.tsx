import React from "react";
import {useAuth} from "../../auth/authContext";
import {AppBar, Box, Button, Container, CssBaseline, Grid, Toolbar, Typography} from "@mui/material";
import {TopBar} from "../../components/TopBar";
import {Outlet} from "react-router-dom";

const Root = () => {
    const {isLoading} = useAuth()

    if (isLoading) {
        return (
            <CssBaseline>
                <div>Loading...</div>
            </CssBaseline>)
    }

    return (
        <CssBaseline>
            <TopBar />
            <Outlet />
        </CssBaseline>
    )
}

export default Root;