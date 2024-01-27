import React from "react";
import {useNavigate} from "react-router-dom";
import "./home.css"

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigate("/admin")
    }

    const handleLoginClick = () => {
        navigate("/login")
    }

    const handleRegisterClick = () => {
        navigate("/register")
    }

    return (
        <div className="main-container">
            <h1>Home</h1>
            <button id="admin" className="button-primary" onClick={handleAdminClick}>Admin Panel</button>
            <button id="login" className="button-primary" onClick={handleLoginClick}>Sign in</button>
            <button id="register" className="button-primary" onClick={handleRegisterClick}>Register</button>
        </div>
    )
}

export default HomePage;