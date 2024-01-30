import {useParams} from "react-router-dom";
import React from "react";
import UserCreatorPage from "../page/users/userCreatorPage";
import UserDetailsPage from "../page/users/userDetailsPage";
import UsersPage from "../page/users/usersPage";
import AdminPage from "../page/admin/adminPage";
import {UserRole} from "../entity/user";
import {ProtectedRoute} from "./protectedRoute";

const UserDetailsWrapper: React.FC = () => {
    const {username} = useParams();
    return <UserDetailsPage username={username}/>;
}

const adminRoutes = [{
    path: "/admin",
    element: <ProtectedRoute roles={[UserRole.ADMIN]} />,
    children: [
        {
            path: "",
            element: <AdminPage />
        },
        {
            path: "users",
            element: <UsersPage/>,
        },
        {
            path: "users/create",
            element: <UserCreatorPage/>,
        },
        {
            path: "users/:id",
            element: <UserDetailsWrapper/>,
        }
    ]
}];

export default adminRoutes;