import {Route, useParams} from "react-router-dom";
import React from "react";
import UserCreatorPage from "../page/users/user.creator.page";
import UserDetailsPage from "../page/users/user.details.page";
import UsersPage from "../page/users/users.page";
import AdminPage from "../page/admin/admin.page";

const UserDetailsWrapper: React.FC = () => {
    const {id: userId} = useParams();
    return <UserDetailsPage userId={Number(userId)}/>;
}

const adminRoutes = () => {
    return (
        <>
            <Route path="/admin/*">
                <Route index element={<AdminPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="users/create" element={<UserCreatorPage />} />
                <Route path="users/:id" element={<UserDetailsWrapper />} />
            </Route>
        </>
    );
};

export default adminRoutes;