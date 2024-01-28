import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {navigateAdminPage, navigateUserDetailsPage} from "../admin/admin.destination";

interface FormState {
    id: number,
}

const UsersPage: React.FC = () => {
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

        navigateUserDetailsPage(navigate, id)
    }

    const handleBack = () => {
        navigateAdminPage(navigate)
    }

    return (
        <div className="main-container">
            <h1>Users</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Id</label>
                <input
                    type="text"
                    name="id"
                    value={formState.id}
                    onChange={handleInputChange}
                    inputMode="numeric"
                />
                <button type="submit" className="button-primary">Find</button>
                <button type="button" className="button-secondary" onClick={handleBack}>Back</button>
            </form>
        </div>
    )
}

export default UsersPage;