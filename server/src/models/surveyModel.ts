import mongoose, { Schema } from "mongoose";
import { Isurvey } from "../entity";


const surveySchema = new Schema<Isurvey>({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const surveyModel = mongoose.model('Survey',surveySchema)