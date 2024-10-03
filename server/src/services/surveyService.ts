import { Isurvey } from "../entity";
import { SurveyRepository } from "../repositories/surveyRepo";

export class SurveyService {
    private surveyRepository: SurveyRepository;
    constructor(surveyRepository: SurveyRepository) {
      this.surveyRepository = surveyRepository;
    }

    async createSurvey(data: Isurvey): Promise<Isurvey> {
        let existingEmail = await this.surveyRepository.findByEmail(data.email)
        if (existingEmail) {
            throw new Error('Email already exists')
        }
        return this.surveyRepository.create(data)
    }

    async getAllSurvey(): Promise<Isurvey[]> {
        let surveys = await this.surveyRepository.findAll()
        return surveys
    }
}