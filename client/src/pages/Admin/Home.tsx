import SurveyCard from "@/components/admin/SurveyCard"

function Home() {
    return (
        <div className="w-full h-full">
            <nav className="h-10 bg-[#1A2522] flex justify-center items-center px-5 py-9 shadow-sm shadow-black">
                <div className="capitalize flex w-full items-center justify-between max-md:px-5 px-20">
                    <span className="text-slate-200 tracking-tighter text-3xl">Survey</span>
                    <span className="text-black font-semibold bg-gray-300 px-4 py-1 rounded tracking-tighter shadow-sm shadow-gray-400" >logout</span>
                </div>
            </nav>
            <div className="pt-14 flex flex-wrap justify-start px-20">
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
            </div>
        </div>
    )
}

export default Home