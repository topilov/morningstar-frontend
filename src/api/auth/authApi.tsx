import api from "../api";
import {User} from "../../entity/user";
import {StatusCodes} from "http-status-codes";

const AUTH_ENDPOINT = "/api/auth"
export const REFRESH_TOKEN_ENDPOINT = `${AUTH_ENDPOINT}/refresh`
export const LOGIN_ENDPOINT = `${AUTH_ENDPOINT}/login`
export const REGISTER_ENDPOINT = `${AUTH_ENDPOINT}/register`
export const LOGOUT_ENDPOINT = `/logout`

interface LoginRequest {
    username: string,
    password: string,
}

interface RegisterRequest {
    username: string,
    password: string,
}

export interface AccessTokenResponse {
    accessToken: string
}

export interface AuthResponse {
    user: User,
    accessToken: string,
}

export const login = async (username: string, password: string): Promise<AuthResponse | null> => {
    try {
        const loginRequest: LoginRequest = {
            username: username,
            password: password,
        }

        const response = await api.post<AuthResponse>(LOGIN_ENDPOINT, loginRequest)
        return response.data
    } catch (e) {
        return null
    }
}

export const register = async (username: string, password: string): Promise<AuthResponse | null> => {
    try {
        const registerRequest: RegisterRequest = {
            username: username,
            password: password,
        }
        const response = await api.post<AuthResponse>(REGISTER_ENDPOINT, registerRequest)
        return response.data
    } catch (e) {
        return null
    }
}

export const logout = async (): Promise<boolean> => {
    try {
        const response = await api.post(LOGOUT_ENDPOINT)
        return response.status === StatusCodes.OK
    } catch (e) {
        return false
    }
}

export const refreshToken = async (): Promise<AccessTokenResponse | null> => {
    try {
        const response = await api.post<AccessTokenResponse>(REFRESH_TOKEN_ENDPOINT)
        return response.data
    } catch (e) {
        return null
    }
}