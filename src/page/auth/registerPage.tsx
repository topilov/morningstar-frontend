import React, {useState} from "react";
import {useAuthForm} from "../../utils/useAuthForm";
import {useNavigate} from "react-router-dom";
import {navigateLoginPage} from "./authDestination";
import {navigateHomePage} from "../home/homeDestination";
import {register} from "../../service/authService"
import {useAuth} from "../../auth/authContext";
import {MenuBox} from "../../components/MenuBox";
import {Box, Button, Grid, Icon, TextField, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";

const RegisterPage: React.FC = () => {
    const { authHandler }= useAuth()
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
            register(formState.username, formState.password).then((authResponse) => {
                if (authResponse) {
                    navigateHomePage(navigate)
                    authHandler(authResponse.user)
                }
            })
        }
    }

    const handleLogin = () => {
        navigateLoginPage(navigate)
    }

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{minHeight: "100vh"}}>
            <MenuBox maxWidth="sm" mx="auto" my={8}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4}}>
                    <Icon sx={{m: 1}}>
                        <LockOutlined/>
                    </Icon>
                    <Typography component="h1" variant="h6">Sign Up</Typography>
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
                        sx={{borderColor: "#30363d"}}
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="repeatPassword"
                        label="Repeat password"
                        type="password"
                        id="repeatPassword"
                        value={formState.repeatPassword}
                        onChange={handleInputChange}
                    />
                    <Box sx={{mt: 2}}/>
                    <Button type="submit" fullWidth color="inherit" variant="outlined" sx={{mt: 3, mb: 2}}>
                        Sign Up
                    </Button>
                    <Button color="secondary" fullWidth onClick={handleLogin}>
                        Sign In
                    </Button>
                </Box>
            </MenuBox>
        </Grid>
    )
}

export default RegisterPage;