import { IAdmin } from "../entity";
import { adminModel } from "../models/adminModel";
import ErrorResponse from "../utils/errorResponse";


export class AdminRepo {
    async login(data: IAdmin): Promise<IAdmin> {
        let admin = await adminModel.findOne({ email: data?.email })
        if(!admin){
            throw ErrorResponse.badRequest('Admin not found')
        }
        if (admin && data?.password == admin?.password) {
            return admin
        } else {
            throw ErrorResponse.badRequest('Password is incorrect')
        }
    }
}