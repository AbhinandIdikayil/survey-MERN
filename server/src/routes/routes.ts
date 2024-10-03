import { Router } from "express";
import { SurveyController } from "../controllers/surveyController";
const surveyController = new SurveyController()
export const routes = Router()

routes.post('/create', surveyController.create.bind(surveyController));
routes.get('/survey', surveyController.getAllSurvey.bind(surveyController));


