import React, {useState} from "react";
import {useAuthForm} from "../../utils/useAuthForm"
import "./auth.page.css"
import {useNavigate} from "react-router-dom";

const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const {formState, checkboxState, handleInputChange, handleCheckboxChange} = useAuthForm(
        {username: '', password: ''},
        {showPassword: false},
    )

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        console.log("Try login")
    }

    const handleRegister = () => {
        navigate("/register")
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formState.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input
                        type={checkboxState.showPassword ? "text" : "password"}
                        name="password"
                        value={formState.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <input
                    type="checkbox"
                    name="password-visibility"
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="password-visibility">Show Password</label>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="button-primary">Sign in</button>
                <button className="button-secondary" onClick={handleRegister} type="button">Register</button>
            </form>
        </div>
    )
}

export default LoginPage;