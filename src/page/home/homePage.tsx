import React from "react";
import {useNavigate} from "react-router-dom";
import "./home.css"
import {navigateAdminPage} from "../admin/adminDestination";
import {navigateLoginPage, navigateRegisterPage} from "../auth/authDestination";
import {useAuth} from "../../auth/authContext";
import {UserRole} from "../../entity/user";

const HomePage = () => {
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

    const {user, isLoading, isLoaded, logoutHandler} = useAuth()

    const logoutClick = () => {
        logoutHandler()
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="main-container">
            {isLoaded && user && (
                <>
                    <h1>Username: {user.username}</h1>
                    <h1>Role: {user.role}</h1>
                    <h1>Balance: ${user.balance}</h1>
                    {user.role === UserRole.ADMIN && (
                        <button id="admin" className="button-primary" onClick={handleAdminClick}>Admin Panel</button>
                    )
                    }
                    <button id="logout" className="button-secondary" onClick={logoutClick}>Log out</button>
                </>
            )}
            {!isLoaded && (
                <>
                    <button id="login" className="button-primary" onClick={handleLoginClick}>Sign in</button>
                    <button id="register" className="button-primary" onClick={handleRegisterClick}>Register</button>
                </>
            )}
        </div>
    )
}

export default HomePage;