import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./home.css"
import {navigateAdminPage} from "../admin/admin.destination";
import {navigateLoginPage, navigateRegisterPage} from "../auth/auth.destination";
import {login, register} from "../../api/auth/auth.api";
import {getRole} from "../../api/users/user.api";
import {isAuthenticated} from "../../api/api.config";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState<string | null>("init")

    const handleAdminClick = () => {
        navigateAdminPage(navigate)
    }

    const handleLoginClick = () => {
        navigateLoginPage(navigate)
    }

    const handleRegisterClick = () => {
        navigateRegisterPage(navigate)
    }

    getRole().then((response) => {
        setRole(response)
    })

    const isAuth = isAuthenticated()

    return (
        <div className="main-container">
            {isAuth && (
                <h1>Home your role {role}</h1>
            )}
            {role === "ROLE_ADMIN" && (
                <button id="admin" className="button-primary" onClick={handleAdminClick}>Admin Panel</button>
            )}
            {!isAuth && (
                <>
                    <button id="login" className="button-primary" onClick={handleLoginClick}>Sign in</button>
                    <button id="register" className="button-primary" onClick={handleRegisterClick}>Register</button>
                </>
            )}
        </div>
    )
}

export default HomePage;