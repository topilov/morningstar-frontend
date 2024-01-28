import api from '../api.config';
import {User} from "../../entity/user";

export const fetchUser = async (id: number): Promise<User | null> => {
    try {
        const response = await api.get<User>(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null
    }
};

export const createUser = async (user: User): Promise<void> => {
    try {
        const response = await api.post('/users', user)
        const createdUser = response.data;
        console.log('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

export const getRole = async (): Promise<string | null> => {
    try {
        const response = await api.get("/role")
        return response.data
    } catch (e) {
        console.error(e)
        return null
    }
}