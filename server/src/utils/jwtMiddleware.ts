import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface ModifiedRequest extends Request {
    user?: any
}

interface CustomJwtPayload extends JwtPayload {
    userId: any;
}

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {  // Ensure this returns void
    const token = req?.cookies?.access_token;
    if (!token) {
        // Send response, but don't return the response object itself
        res.status(401).json({ error: 'Access denied. No token provided.' });
        return;  // Return here to stop further execution
    }

    try {
        const decoded = jwt.verify(token, 'ACCESS') as CustomJwtPayload;

        const { _id, email } = decoded;
        (req as ModifiedRequest).user = { _id, email };

        next();  // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(401).json({ message: 'Failed to authenticate token' });
    }
};


