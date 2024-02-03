import React, {useContext} from "react";
import "./app.css"

import {
    Box,
    ThemeProvider,
} from "@mui/material";

import type {} from '@mui/x-data-grid/themeAugmentation';
import Routes from "./route/routes";
import AuthProvider from "./auth/authProvider";
import {theme} from "./theme/theme";


const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App;

