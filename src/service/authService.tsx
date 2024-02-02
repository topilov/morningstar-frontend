import {
    AuthResponse,
    login as apiLogin,
    logout as apiLogout,
    refreshToken as apiRefreshToken,
    register as apiRegister,
} from "../api/auth/authApi"

const ACCESS_TOKEN_KEY = "access_token"

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY)

export const setAccessToken = (token: string) => localStorage.setItem(ACCESS_TOKEN_KEY, token)

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY)

export const login = async (username: string, password: string): Promise<AuthResponse | null> => {
    const response = await apiLogin(username, password)

    if (response) {
        setAccessToken(response.accessToken)
    }

    return response
}

export const register = async (username: string, password: string): Promise<AuthResponse | null> => {
    const response = await apiRegister(username, password)

    if (response) {
        setAccessToken(response.accessToken)
    }

    return response
}

export const logout = async (): Promise<boolean> => {
    removeAccessToken()
    return await apiLogout()
}

export const refreshToken = async (): Promise<boolean> => {
    const response = await apiRefreshToken()

    if (response) {
        setAccessToken(response.accessToken)
    }

    return !!response
}