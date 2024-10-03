import { IAdmin } from "../entity";
import { AdminRepo } from "../repositories/adminRepo";

export class AdminService {
    private adminRepository: AdminRepo
    constructor(adminRepository:AdminRepo) {
        this.adminRepository = adminRepository
    }

    async login(data:IAdmin): Promise<IAdmin> {
        return await this.adminRepository.login(data)
    }
}