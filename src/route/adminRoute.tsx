import {useParams} from "react-router-dom";
import React from "react";
import UserCreatorPage from "../page/users/userCreatorPage";
import UserDetailsPage from "../page/users/userDetailsPage";
import FindUserPage from "../page/users/findUserPage";
import AdminPage from "../page/admin/adminPage";
import {UserRole} from "../entity/user";
import {ProtectedRoute} from "./protectedRoute";
import {UsersPage} from "../page/users/usersPage";

const UserDetailsWrapper: React.FC = () => {
    const {id} = useParams();
    return <UserDetailsPage id={Number(id)}/>;
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
            path: "find-user",
            element: <FindUserPage/>,
        },
        {
            path: "users",
            element: <UsersPage />
        },
        {
            path: "users/create",
            element: <UserCreatorPage/>,
        },
        {
            path: "find-user/:id",
            element: <UserDetailsWrapper/>,
        }
    ]
}];

export default adminRoutes;