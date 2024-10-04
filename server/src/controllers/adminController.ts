import { NextFunction, Request, Response } from "express";
import { AdminFactory } from "../factory/adminFactory";
import { HttpStatusCode } from "../utils/enum";
import ErrorResponse from "../utils/errorResponse";
import { generateToken } from "../utils/generateToken";

export class AdminController {
    private adminService = AdminFactory.createAdminFactory()
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { data } = req.body
            if (!data) {
                throw ErrorResponse.badRequest('Please fill out form')
            }
            let admin = await this.adminService.login(data)
            if (admin) {
                let token = generateToken({ _id: admin._id, email: admin.email })
                res.status(HttpStatusCode.OK)
                    //! for 12 day
                    .cookie('access_token', token, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 60 * 60 * 24 * 1000 * 12 })
                    .json({ message: 'Login succesfull', data: admin, success: true })
            } else {
                res.status(404).json({ message: 'Login failed', data: admin, success: false })
            }
        } catch (error) {
            next(error)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('hii')
            res.cookie('access_token', '', {
                maxAge: 1,
                httpOnly: true,
                sameSite: 'none', secure: true
            })
            res.status(200).json({ message: "logout successfull", success: true })
        } catch (error) {
            next(error)
        }
    }
}