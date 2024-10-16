import { Isurvey } from "../entity";
import { surveyModel } from "../models/surveyModel";


export class SurveyRepository {
    async findByEmail(email: string): Promise<true | false> {
        let survey = await surveyModel.findOne({email}).exec()
        return survey ? true : false
    }
    async findAll(): Promise<Isurvey[]> {
        return surveyModel.find().sort({createdAt:-1}).exec()
    }
    async create(data: Isurvey): Promise<Isurvey> {
        let survey = new surveyModel(data)
        return survey.save()
    }
    async surveyByGender(): Promise<Isurvey[]> {
        let surveyByGender = await surveyModel.aggregate([
            {
                $group:{
                    _id:'$gender',
                    count: {$sum:1}
                }
            }
        ])
        return surveyByGender as Isurvey[]
    }
}