import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.SERVER as string,
    withCredentials: true
})