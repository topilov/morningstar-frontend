import { useNavigate } from "react-router-dom";
import React from "react";
import {navigateUserCreatePage, navigateUsersPage} from "./adminDestination";
import {navigateHomePage} from "../home/homeDestination";

const AdminPage = () => {
    const navigate = useNavigate()

    const handleCreateUserClick = () => {
        navigateUserCreatePage(navigate)
    }

    const handleUsersClick = () => {
        navigateUsersPage(navigate)
    }

    const handleBack = () => {
        navigateHomePage(navigate)
    }

    return (
        <div className="main-container">
            <h1>Admin Panel</h1>
            <button className="button-primary" onClick={handleCreateUserClick}>Create User</button>
            <button className="button-primary" onClick={handleUsersClick}>Users</button>
            <button type="button" className="button-secondary" onClick={handleBack}>Back</button>
        </div>
    )
}

export default AdminPage;