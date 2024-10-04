import { NextFunction, Request, Response } from "express";
import ErrorResponse from "./errorResponse";
import mongoose from 'mongoose'

export const errorHandler = ((err: Error | ErrorResponse, req: Request, res: Response, next: NextFunction): any => {
    console.log(err, '--------')
    if (err instanceof mongoose.Error.ValidationError) {
        const errors = Object.keys(err.errors).reduce((acc, key) => {
            acc[key] = err.errors[key].message;
            return acc;
        }, {} as Record<string, string>); 

        return res.status(400).json({
            message: "Validation failed",
            success: false,
            errors,  
        });
    }
    
    if (err instanceof ErrorResponse) {
        return res.status(err.status).json({ message: err.message, success: err.success });
    } else {
        return res.status(500).json({ message: 'Something went wrong', success: false });
    }
});

