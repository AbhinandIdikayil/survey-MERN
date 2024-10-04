import { Isurvey } from "../entity";
import { SurveyRepository } from "../repositories/surveyRepo";
import ErrorResponse from "../utils/errorResponse";

export class SurveyService {
    private surveyRepository: SurveyRepository;
    constructor(surveyRepository: SurveyRepository) {
      this.surveyRepository = surveyRepository;
    }

    async createSurvey(data: Isurvey): Promise<Isurvey> {
        let existingEmail = await this.surveyRepository.findByEmail(data.email)
        if (existingEmail) {
            throw ErrorResponse.badRequest('Email already exists')
        }
        return this.surveyRepository.create(data)
    }

    async getAllSurvey(): Promise<Isurvey[]> {
        let surveys = await this.surveyRepository.findAll()
        return surveys
    }
}