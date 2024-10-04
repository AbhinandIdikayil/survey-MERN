import { config } from 'dotenv'
config()

export const PORT = process.env.PORT as string
export const MONGO_URI = process.env.MONGO_URI as string
export const ClIENT = process.env.CLIENT as string

export const corsOption = {
    origin: ClIENT, // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Allowed headers
    credentials: true // Allow cookies to be sent with requests
}