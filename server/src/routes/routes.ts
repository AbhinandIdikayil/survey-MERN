import { Router } from "express";
import { SurveyController } from "../controllers/surveyController";
import { AdminController } from "../controllers/adminController";
import { verifyToken } from "../utils/jwtMiddleware";
const surveyController = new SurveyController()
const adminController = new AdminController()
export const routes = Router()

routes.post('/create', surveyController.create.bind(surveyController));
routes.get('/survey',verifyToken, surveyController.getAllSurvey.bind(surveyController));
routes.post('/login', adminController.login.bind(adminController));
routes.post('/logout', adminController.logout.bind(adminController));


