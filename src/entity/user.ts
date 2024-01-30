export enum UserRole {
    ADMIN = "ROLE_ADMIN",
    USER = "ROLE_USER"
}

export interface User {
    id: number;
    username: string;
    balance: number;
    role: UserRole;
}