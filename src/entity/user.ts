export enum UserRole {
    ADMIN = "ROLE_ADMIN",
    USER = "ROLE_USER"
}

export interface User {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    balance: number;
    createdAt: string | null;
    updatedAt: string | null;
    locked: boolean;
}