import {
    getUser as apiGetUser,
    getMyUser as apiGetMyUser,
    getUsers as apiGetUsers,
    createUser as apiCreateUser,
    getRole as apiGetRole,
    GetUsersResponse
} from "../api/users/userApi";
import {User} from "../entity/user";

export const getUser = async (username: string): Promise<User | null> => {
    return apiGetUser(username)
}

export const getUsers = async (): Promise<GetUsersResponse | null> => {
    return apiGetUsers()
}

export const getMyUser = async (): Promise<User | null> => {
    return apiGetMyUser()
}