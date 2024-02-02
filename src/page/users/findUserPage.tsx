import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {navigateAdminPage, navigateUserDetailsPage} from "../admin/adminDestination";
import {MenuBox} from "../../components/MenuBox";
import {Box, Button, Icon, TextField, Typography} from "@mui/material";
import {FindInPage} from "@mui/icons-material";

interface FormState {
    id: number,
}

const FindUserPage: React.FC = () => {
    const navigate = useNavigate()
    const [formState, setFormState] = useState<FormState>({
        id: 0
    })

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const id = formState.id;

        console.log("here")
        navigateUserDetailsPage(navigate, id)
    }

    const handleBack = () => {
        navigateAdminPage(navigate)
    }

    return (
        <MenuBox maxWidth="sm" mx="auto" my={8}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Icon>
                    <FindInPage/>
                </Icon>
                <Typography component="h1" variant="h6">Find User</Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="id"
                    label="Id"
                    value={formState.id}
                    onChange={handleInputChange}
                    inputMode="numeric"
                />
                <Box sx={{mt: 2}}/>
                <Button type="submit" color="inherit" fullWidth variant="outlined" sx={{mt: 2}}>Find User</Button>
                <Button color="secondary" fullWidth sx={{mt: 2}} onClick={handleBack}>Back</Button>
            </Box>
        </MenuBox>
    )
}

export default FindUserPage;