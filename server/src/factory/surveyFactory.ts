import { SurveyRepository } from "../repositories/surveyRepo";
import { SurveyService } from "../services/surveyService";


export class surveyFactory {
    static createSurveyFactory(): SurveyService {
        const surveyRepository = new SurveyRepository();
        const surveyService = new SurveyService(surveyRepository);
        return surveyService
    }
}