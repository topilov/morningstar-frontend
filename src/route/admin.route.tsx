import {Route, Routes, useParams} from "react-router-dom";
import React from "react";
import UserCreatorPage from "../page/users/user.creator.page";
import UserDetailsPage from "../page/users/user.details.page";
import UsersPage from "../page/users/users.page";
import AdminPage from "../page/admin/admin.page";

const AdminRoute: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/create" element={<UserCreatorPage />} />
            <Route path="/users/:id" element={<UserDetailsWrapper />} />
        </Routes>
    )
}

const UserDetailsWrapper: React.FC = () => {
    const { id: userId } = useParams();
    return <UserDetailsPage userId={Number(userId)} />;
}

export default AdminRoute;