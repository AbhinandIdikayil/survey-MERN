import { AdminRepo } from "../repositories/adminRepo";
import { AdminService } from "../services/adminService";

export class AdminFactory {
    static createAdminFactory(): AdminService {
        const adminRepository = new AdminRepo()
        const adminService = new AdminService(adminRepository)
        return adminService
    }
}