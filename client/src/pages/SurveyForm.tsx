import SurveyFormSection from "@/components/user/Form"
import { useState } from "react"
import s from '../animation/Animation - 1728036169958.json'
import Lottie from "lottie-react";

function SurveyForm() {
    const [submited, setSubmited] = useState<boolean>(false)


    if (submited) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="flex-col items-center justify-center relative h-full">
                    <Lottie className="h-96" animationData={s}  loop={false} />
                    <h1 className="text-center text-white text-3xl capitalize pop-up max-md:text-xl">successfully submited</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex justify-center pt-10 max-md:pb-5 max-md:pt-5 relative">
            <main className="md:absolute md:top-16  px-16 max-md:px-6 py-5 pb-6 bg-white h-max w-5/6 max-md:w-11/12 rounded-md shadow-md shadow-slate-400">
                <section className="pb-4">
                    <h1 className="text-3xl font-semibold text-slate-700 tracking-tighter pb-3">Survey Form</h1>
                    <p style={{ fontWeight: '500' }} className="capitalize tracking-tight text-base max-md:text-xs text-slate-600"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit saepe officia recusandae ipsam obcaecati accusamus dolorum accusantium consequatur nihil quisquam nemo dicta culpa, nam quis atque eaque. Cumque, nemo commodi? </p>
                </section>
                <section className="w-full">
                    <SurveyFormSection setSubmited={setSubmited} />
                </section>
            </main>
        </div>
    )
}

export default SurveyForm