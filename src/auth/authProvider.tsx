import React, {useContext, useEffect, useState} from "react";
import {getAccessToken, logout} from "../service/authService";
import {AuthContext} from "./authContext";
import {User} from "../entity/user";
import {getMyUser} from "../service/userService";

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const authHandler = (user: User) => {
        setUser(user)
        setIsLoaded(true)
    }

    const logoutHandler = () => {
        logout().then(() => {
            setIsLoaded(false)
        })
    }

    useEffect(() => {
        const getUserData = async () => {
            const accessToken = getAccessToken()

            if (accessToken) {
                const userData = await getMyUser()
                if (userData) {
                    setUser(userData)
                    setIsLoaded(true)
                }
            }

            setIsLoading(false)
        }

        getUserData()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            isLoaded,
            authHandler,
            logoutHandler,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;