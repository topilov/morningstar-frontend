import axios from 'axios';

export const getJwtToken = () => localStorage.getItem("jwtToken")

export const setJwtToken = (token: string) => localStorage.setItem('jwtToken', token)

export const isAuthenticated = () => !!getJwtToken()

export interface JwtTokenResponse {
    token: string
}

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

const setAuthorizationHeader = (config: any) => {
    const token = getJwtToken();

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
};

api.interceptors.request.use(setAuthorizationHeader)

export default api;