import React from "react";
import {useNavigate} from "react-router-dom";
import {navigateLoginPage, navigateRegisterPage} from "../page/auth/authDestination";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import {useAuth} from "../auth/authContext";
import {UserRole} from "../entity/user";
import {navigateAdminPage} from "../page/admin/adminDestination";
import {navigateContentPage} from "../page/content/contentDestination";

export const TopBar: React.FC = () => {
    const navigate = useNavigate()
    const { user, isLoaded, logoutHandler } = useAuth()

    const handleSignIn = () => {
        navigateLoginPage(navigate)
    }

    const handleSignUp = () => {
        navigateRegisterPage(navigate)
    }

    const handleAdminPanel = () => {
        navigateAdminPage(navigate)
    }

    const handleContent = () => {
        navigateContentPage(navigate)
    }

    return (
        <AppBar position="fixed" sx={{width: '100%', borderBottom: 1, borderColor: "#30363d"}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <ChildFriendlyIcon/>
                </IconButton>

                <Typography variant="h6" component="div"
                            sx={{flexGrow: 1, ml: 2, paddingRight: 4}}>Morningstar</Typography>

                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button color="inherit">Info</Button>
                    <Button color="inherit">Support</Button>
                    {isLoaded ? (
                        <>
                            { user?.role === UserRole.ADMIN && (
                                <Button color="inherit" onClick={handleAdminPanel}>Admin Panel</Button>
                            )}
                            <Button color="inherit" onClick={handleContent}>Content</Button>
                            <Button color="inherit" onClick={logoutHandler}>Log out</Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" variant="outlined" onClick={handleSignIn}>Sign In</Button>
                            <Button color="inherit" onClick={handleSignUp}>Sign Up</Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};