import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import {navigateFindUserPage, navigateUserCreatePage, navigateUsersPage} from "./adminDestination";
import {navigateHomePage} from "../home/homeDestination";
import {Alert, AlertTitle, AppBar, Box, Button, Icon, Tab, Tabs, Typography} from "@mui/material";
import {MenuBox} from "../../components/MenuBox";
import {LockOutlined, PersonOutline} from "@mui/icons-material";

const AdminPage = () => {
    const navigate = useNavigate()

    const handleCreateUserClick = () => {
        navigateUserCreatePage(navigate)
    }

    const handleFindUserClick = () => {
        navigateFindUserPage(navigate)
    }

    const handleUsersClick = () => {
        navigateUsersPage(navigate)
    }

    const handleBack = () => {
        navigateHomePage(navigate)
    }

    return (
        <MenuBox>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4, gap: 2}}>
                <Icon sx={{m: 1}}>
                    <PersonOutline/>
                </Icon>
                <Typography component="h1" variant="h6" sx={{mb: 2}}>Admin Panel</Typography>
                <Button color="inherit" variant="outlined" fullWidth onClick={handleCreateUserClick}>Create User</Button>
                <Button color="inherit" variant="outlined" fullWidth onClick={handleFindUserClick}>Find User by Id</Button>
                <Button color="inherit" variant="outlined" fullWidth onClick={handleUsersClick}>Users</Button>
                <Button color="secondary" onClick={handleBack}>Back</Button>
            </Box>
        </MenuBox>
    )
}

export default AdminPage;