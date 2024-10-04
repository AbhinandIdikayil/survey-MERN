import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../utils/errorResponse";
import { HttpStatusCode } from "../utils/enum";
import { surveyFactory } from "../factory/surveyFactory";


export class SurveyController {
    private surveyService = surveyFactory.createSurveyFactory();

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { data } = req.body
            if (!data) {
                throw ErrorResponse.badRequest('Please fill the form')
            }
            let survey = await this.surveyService.createSurvey(data)
            res.status(HttpStatusCode.CREATED).json({ message: 'Survey created successfully', data: survey, success:true })
        } catch (error) {
            next(error)
        }
    }

    async getAllSurvey(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let surveys = await this.surveyService.getAllSurvey()
            res.status(HttpStatusCode.OK).json({ message: 'success', data: surveys, success:true })
        } catch (error) {
            next(error)
        }
    }
}