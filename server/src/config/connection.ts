import mongoose from "mongoose"
import { MONGO_URI } from "./dotenv"


export const connectDB = async () => {
    try {
        let connected = await mongoose.connect(MONGO_URI)
        if(connected){
            console.log('db connected')
        }
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}