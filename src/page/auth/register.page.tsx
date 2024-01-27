import React, {useState} from "react";
import {useAuthForm} from "../../utils/useAuthForm";
import "./auth.page.css"
import {useNavigate} from "react-router-dom";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate()
    const { formState, checkboxState, handleInputChange, handleCheckboxChange } = useAuthForm(
        { username: '', password: '', repeatPassword: '' },
        { showPassword: false },
    )

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let formError = null

        if (!formState.username) {
            formError = "Enter username"
        }

        if (!formState.password) {
            formError = "Enter password"
        }

        if (formState.password !== formState.repeatPassword) {
            formError = "Password do not match"
        }

        setError(formError)

        if (!formError) {
            console.log("Try register")
        }
    }

    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <div className="login-container">
            <h1>Register</h1>
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
                <div className="input-container">
                    <label htmlFor="password">Repeat password</label>
                    <input
                        type={checkboxState.showPassword ? "text" : "password"}
                        name="repeatPassword"
                        value={formState.repeatPassword}
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
                <button type="submit" className="button-primary">Register</button>
                <button className="button-secondary" onClick={handleLogin} type="button">Sign in</button>
            </form>
        </div>
    )
}

export default RegisterPage;