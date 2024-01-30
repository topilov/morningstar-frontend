import {useAuth} from "../auth/authContext";
import {UserRole} from "../entity/user";
import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {navigateLoginPage} from "../page/auth/authDestination";

interface ProtectedRouteProps {
    roles: UserRole[]
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
    const { user, isLoaded } = useAuth()
    const navigate = useNavigate()

    if (!isLoaded) {
        navigateLoginPage(navigate)
        return <div />
    }

    if (user && !roles.includes(user.role)) {
        return <div className="main-container">Access denied</div>
    }

    return <Outlet />
}