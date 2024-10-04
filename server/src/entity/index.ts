import { Gender } from "../utils/enum";

export interface Isurvey {
    username: string,
    gender: Gender,
    nationality: string,
    email: string,
    phone: number,
    address: string,
    message: string
}

export interface IAdmin {
    _id: string
    email: string,
    password: string
}