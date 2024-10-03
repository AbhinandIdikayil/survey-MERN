
import mongoose, { Schema } from "mongoose";
import { IAdmin } from "../entity";


const adminSchema = new Schema<IAdmin>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const adminModel = mongoose.model('Admin', adminSchema)