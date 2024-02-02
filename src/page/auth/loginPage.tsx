import React, {useState} from "react";
import {useAuthForm} from "../../utils/useAuthForm"
import {useNavigate} from "react-router-dom";
import {navigateRegisterPage} from "./authDestination";
import {navigateHomePage} from "../home/homeDestination";
import {login} from "../../service/authService"
import {useAuth} from "../../auth/authContext";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Grid, Icon,
    Link,
    TextField,
    Typography
} from "@mui/material";
import {MenuBox} from "../../components/MenuBox";
import {LockOutlined} from "@mui/icons-material";

const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const {authHandler} = useAuth()
    const {formState, checkboxState, handleInputChange, handleCheckboxChange} = useAuthForm(
        {username: '', password: ''},
        {showPassword: false},
    )

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        login(formState.username, formState.password).then((authResponse) => {
            if (authResponse) {
                navigateHomePage(navigate)
                authHandler(authResponse.user)
            }
        })
    }

    const handleRegister = () => {
        navigateRegisterPage(navigate)
    }

    return (
        <MenuBox maxWidth="sm" mx="auto" my={8}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4}}>
                <Icon sx={{m: 1}}>
                    <LockOutlined/>
                </Icon>
                <Typography component="h1" variant="h6">Sign In</Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    value={formState.username}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formState.password}
                    onChange={handleInputChange}
                />
                <Box sx={{mt: 2}}/>
                <Button type="submit" fullWidth color="inherit" variant="outlined" sx={{mt: 3, mb: 2}}>Sign In</Button>
                <Button color="secondary" fullWidth onClick={handleRegister}>Sign Up</Button>
            </Box>
        </MenuBox>
    )
}

export default LoginPage;