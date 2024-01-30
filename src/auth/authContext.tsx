import React, {useContext} from "react";
import {User} from "../entity/user";

interface AuthContextType {
    user: User | null,
    isLoading: boolean,
    isLoaded: boolean,
    authHandler: (user: User) => void,
    logoutHandler: () => void,
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}