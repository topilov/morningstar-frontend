import api from '../api';
import {User} from "../../entity/user";

export const getUser = async (username: string): Promise<User | null> => {
    try {
        const response = await api.get<User>(`api/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null
    }
};

export const getMyUser = async (): Promise<User | null> => {
    return getUser("me")
}

export const createUser = async (user: User): Promise<void> => {
    try {
        const response = await api.post('api/admin/users', user)
        const createdUser = response.data;
        console.log('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

export const getRole = async (): Promise<string | null> => {
    try {
        const response = await api.get("api/role")
        return response.data
    } catch (e) {
        return null
    }
}