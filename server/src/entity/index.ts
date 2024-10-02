import { Gender } from "../utils/enum";

export interface Isurvey {
    name: string,
    gender: Gender,
    nationality: string,
    email: string,
    phone: number,
    address: string,
    message: string
}