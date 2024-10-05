import SurveyCard from "@/components/admin/SurveyCard"
import SurveyModal from "@/components/admin/SurveyModal"
import { adminLogout, getAllSurvey } from "@/redux/action/adminAction"
import { AppDispatch, RootState } from "@/redux/store"
import { survey } from "@/types"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


function Home() {
    const dispath: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state: RootState) => state.admin)
    const [modalData, setModalData] = useState<survey | null>(null)
    async function handleLogout() {
        try {
            await dispath(adminLogout()).unwrap()
            navigate('/login')
            return
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchData() {
        try {
            await dispath(getAllSurvey()).unwrap()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="w-full h-full relative">
            {
                modalData && (
                    <SurveyModal data={modalData} onClose={setModalData} />
                )
            }
            <nav className="h-10 bg-[#1A2522] flex justify-center items-center px-5 py-9 shadow-sm shadow-black">
                <div className="capitalize flex w-full items-center justify-between max-md:px-5 px-20">
                    <span className="text-slate-200 tracking-tighter text-3xl">Survey</span>
                    <span className="text-black font-semibold bg-gray-300 px-4 py-1 rounded tracking-tighter shadow-sm shadow-gray-400" onClick={handleLogout} >logout</span>
                </div>
            </nav>
            <div className="pt-14 justify-start px-20 max-md:px-0 max-md:justify-center cards bg-[#34a265]">
                {
                    state.surveys?.length &&
                    state.surveys?.map((data: survey) => (
                        <SurveyCard setModalData={setModalData} data={data} key={data?.email} />
                    ))
                }
                {/* <SurveyCard />
                <SurveyCard />
                <SurveyCard />
                <SurveyCard /> */}
            </div>
        </div>
    )
}

export default Home