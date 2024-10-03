import { IAdmin } from "../entity";
import { adminModel } from "../models/adminModel";


export class AdminRepo {
    async login(data: IAdmin): Promise<IAdmin> {
        let admin = await adminModel.findOne({ email: data?.email })
        if(!admin){
            throw new Error('Admin not found')
        }
        if (admin && data?.password == admin?.password) {
            return admin
        } else {
            throw new Error('Password is incorrect')
        }
    }
}