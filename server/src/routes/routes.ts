import { Router } from "express";
import { SurveyController } from "../controllers/surveyController";
import { AdminController } from "../controllers/adminController";
const surveyController = new SurveyController()
const adminController = new AdminController()
export const routes = Router()

routes.post('/create', surveyController.create.bind(surveyController));
routes.get('/survey', surveyController.getAllSurvey.bind(surveyController));
routes.post('/login', adminController.login.bind(adminController));


