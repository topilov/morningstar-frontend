import React, {useState} from "react";
import {User, UserRole} from "../../entity/user";
import {createUser} from "../../api/users/userApi";
import {useNavigate} from "react-router-dom";
import {navigateAdminPage} from "../admin/adminDestination";

interface FormState {
    id: string;
    username: string;
    password: string;
    balance: string;
    role: UserRole;
}

const UserCreatorPage: React.FC = () => {
    const navigate = useNavigate()
    const [formState, setFormState] = useState<FormState>({
        id: '',
        username: '',
        password: '',
        balance: '',
        role: UserRole.USER
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

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [event.target.id]: event.target.value as UserRole
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
        <option key={role} value={role}>
            {role}
        </option>
    ))

    return (
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
    )
}

export default UserCreatorPage;