import { useNavigate } from "react-router-dom";
import React from "react";

const AdminPage = () => {
    const navigate = useNavigate()

    const handleCreateUserClick = () => {
        navigate("/admin/users/create")
    }

    const handleUsersClick = () => {
        navigate("/admin/users")
    }

    const handleBack = () => {
        navigate("/")
    }

    return (
        <div className="main-container">
            <h1>Admin Panel</h1>
            <button className="button-primary" onClick={handleCreateUserClick}>Create User</button>
            <button className="button-primary" onClick={handleUsersClick}>Users</button>
            <button type="button" className="button-secondary" onClick={handleBack}>Back</button>
        </div>
    )
}

export default AdminPage;