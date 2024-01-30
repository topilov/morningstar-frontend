import { getUser as apiGetUser, getMyUser as apiGetMyUser, createUser as apiCreateUser, getRole as apiGetRole } from "../api/users/userApi";
import {User} from "../entity/user";

export const getUser = async (username: string): Promise<User | null> => {
    return apiGetUser(username)
}

export const getMyUser = async (): Promise<User | null> => {
    return apiGetMyUser()
}