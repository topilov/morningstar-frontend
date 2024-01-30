import api from "../api";
import {User} from "../../entity/user";
import {StatusCodes} from "http-status-codes";

interface LoginRequest {
    username: string,
    password: string,
}

interface RegisterRequest {
    username: string,
    password: string,
}

export interface AccessTokenResponse {
    token: string
}

export interface AuthResponse {
    user: User,
    token: string,
}

export const login = async (username: string, password: string): Promise<AuthResponse | null> => {
    try {
        const loginRequest: LoginRequest = {
            username: username,
            password: password,
        }

        const response = await api.post<AuthResponse>('api/auth/login', loginRequest)
        return response.data
    } catch (e) {
        console.error('Error while login', e)
        return null
    }
}

export const register = async (username: string, password: string): Promise<AuthResponse | null> => {
    try {
        const registerRequest: RegisterRequest = {
            username: username,
            password: password,
        }
        const response = await api.post<AuthResponse>('api/auth/register', registerRequest)
        return response.data
    } catch (e) {
        console.error('Error while register', e)
        return null
    }
}

export const logout = async (): Promise<boolean> => {
    try {
        const response = await api.post(`/logout`)
        return response.status === StatusCodes.OK
    } catch (e) {
        console.error(`Error while logout`, e)
        return false
    }
}

export const refreshToken = async (): Promise<AccessTokenResponse | null> => {
    try {
        const response = await api.post<AccessTokenResponse>("/api/auth/refresh")
        return response.data
    } catch (e) {
        console.error("Error while refresh token", e)
        return null
    }
}