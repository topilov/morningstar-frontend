import {User} from "./user";

export interface Content {
    id: number,
    title: string,
    description: string,
    price: number,
    owner: User,
}