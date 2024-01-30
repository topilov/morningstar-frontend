import axios from 'axios';
import {StatusCodes} from "http-status-codes";
import {getAccessToken, refreshToken, removeAccessToken, setAccessToken} from "../service/authService";

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

const setAuthorizationHeader = (config: any) => {
    const token = getAccessToken();

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
};

const validateAccessToken = async (error: any) => {
    const originalRequest = {...error.config}
    originalRequest._isRetry = true

    if (error.response.status !== StatusCodes.UNAUTHORIZED || !error.config || error.config._isRetry) throw error

    try {
        const response = await refreshToken()

        if (response) {
            return api.request(originalRequest)
        }
    } catch (e) {
        console.log("Authentication error", e)
    }

    removeAccessToken()
    throw error
}

api.interceptors.request.use(setAuthorizationHeader)

api.interceptors.response.use(
    (config) => {
        return config
    },
    validateAccessToken
)

export default api;