import { NextFunction, Request, Response } from "express";
import { AdminFactory } from "../factory/adminFactory";
import { HttpStatusCode } from "../utils/enum";
import ErrorResponse from "../utils/errorResponse";

export class AdminController {
    private adminService = AdminFactory.createAdminFactory()
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {data} = req.body
            if(!data){
                throw ErrorResponse.badRequest('Please fill out form')
            }
            let admin = await this.adminService.login(data)
            res.status(HttpStatusCode.OK).json(admin)
        } catch (error) {
            next(error)
        }
    }
}