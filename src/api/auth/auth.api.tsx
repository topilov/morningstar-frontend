import api, {JwtTokenResponse} from "../api.config";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface LoginRequest {
    username: string,
    password: string,
}

interface RegisterRequest {
    username: string,
    password: string,
}

export const login = async (username: string, password: string): Promise<JwtTokenResponse | null> => {
    try {
        const loginRequest: LoginRequest = {
            username: username,
            password: password,
        }
        const response = await api.post('auth/login', loginRequest)
        return response.data
    } catch (e) {
        console.error('Error while login', error)
        return null
    }
}

export const register = async (username: string, password: string): Promise<JwtTokenResponse | null> => {
    try {
        const registerRequest: RegisterRequest = {
            username: username,
            password: password,
        }
        const response = await api.post('auth/register', registerRequest)
        return response.data
    } catch (e) {
        console.error('Error while register', error)
        return null
    }
}