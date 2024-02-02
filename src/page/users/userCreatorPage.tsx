import React, {useState} from "react";
import {User, UserRole} from "../../entity/user";
import {createUser} from "../../api/users/userApi";
import {useNavigate} from "react-router-dom";
import {navigateAdminPage} from "../admin/adminDestination";
import {MenuBox} from "../../components/MenuBox";
import {
    Box, Button,
    FormControl,
    Icon,
    InputLabel,
    MenuItem, OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import {AccessibilityNew, AccessibilityNewOutlined, AccessibilityNewRounded, PersonOutline} from "@mui/icons-material";

interface FormState {
    id: string;
    username: string;
    password: string;
    balance: string;
    role: UserRole;
    locked: boolean;
}

const UserCreatorPage = () => {
    const navigate = useNavigate()
    const [formState, setFormState] = useState<FormState>({
        id: '',
        username: '',
        password: '',
        role: UserRole.USER,
        balance: '',
        locked: false
    });
    const [formErrors, setFormErrors] = useState<Partial<FormState>>()

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleRoleChange = (event: SelectChangeEvent) => {
        setFormState({
            ...formState,
            role: event.target.value as UserRole
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormErrors({});

        const errors: Partial<FormState> = {};

        if (!formState.username) {
            errors.username = 'Username is required';
        }

        if (!formState.balance || isNaN(Number(formState.balance))) {
            errors.balance = 'Balance is required and must be a number';
        }

        if (Object.keys(errors).length) {
            setFormErrors(errors);
        }

        const user: User = {
            createdAt: null, updatedAt: null,
            ...formState,
            id: Number(formState.id),
            balance: Number(formState.balance)
        };

        try {
            await createUser(user);
        } catch (error) {
            console.error(error);
        }
    }

    const handleBack = () => {
        navigateAdminPage(navigate)
    }

    const roleOptions = Object.values(UserRole).map((role) => (
        <MenuItem key={role} value={role}>{role}</MenuItem>
    ))

    return (
        <MenuBox  maxWidth="sm" mx="auto" my={8}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                <Icon>
                    <AccessibilityNew />
                </Icon>
                <Typography component="h1" variant="h6">Create User</Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="id"
                        label="Id"
                        value={formState.id}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        label="Username"
                        value={formState.username}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        value={formState.password}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="balance"
                        label="Balance"
                        value={formState.id}
                        onChange={handleInputChange}
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            required
                            fullWidth
                            id="role"
                            name="Role"
                            value={formState.role}
                            label="Role"
                            onChange={handleRoleChange}
                        >
                            {roleOptions}
                        </Select>
                    </FormControl>
                </Box>
                <Button type="submit" color="inherit" fullWidth variant="outlined" sx={{mt: 4}}>Create user</Button>
                <Button color="secondary" sx={{mt: 2}} onClick={handleBack}>Back</Button>
            </Box>
        </MenuBox>
    )

/*    return (
        <div className="main-container">
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="id">Id</label>
                    <input
                        type="text"
                        name="id"
                        value={formState.id}
                        onChange={handleInputChange}
                        required
                    />
                    {formErrors?.id && <p>{formErrors.id}</p>}
                </div>
                <div className="input-container">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formState.username}
                        onChange={handleInputChange}
                        required
                    />
                    {formErrors?.username && <p>{formErrors.username}</p>}
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        value={formState.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="balance">Balance</label>
                    <input
                        type="text"
                        name="balance"
                        value={formState.balance}
                        onChange={handleInputChange}
                        required
                    />
                    {formErrors?.balance && <p>{formErrors.balance}</p>}
                </div>
                <div className="input-container">
                    <label htmlFor="role">Role</label>
                    <select
                        id="role"
                        value={formState.role}
                        onChange={handleRoleChange}
                        required
                    >
                        {roleOptions}
                    </select>
                </div>
                <button type="submit" className="button-primary">Create</button>
                <button type="button" className="button-secondary" onClick={handleBack}>Back</button>
            </form>
        </div>
    )*/
}

export default UserCreatorPage;