import { NextFunction, Request, Response } from "express";
import ErrorResponse from "./errorResponse";

export const errorHandler = ((err: Error | ErrorResponse, req: Request, res: Response, next: NextFunction): any => {
    if (err instanceof ErrorResponse) {
        console.log(err,'--------')
        return res.status(err.status).json({ message: err.message, success: err.success });
    } else {
        return res.status(500).json({ message: 'Something went wrong', success: false });
    }
});

