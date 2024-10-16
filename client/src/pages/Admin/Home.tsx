import LogoutConfirmModal from "@/components/admin/LogoutConfirmModal"
// import SurveyCard from "@/components/admin/SurveyCard"
import SurveyModal from "@/components/admin/SurveyModal"
import TableList from "@/components/admin/TableList"
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { api } from "@/config/axiosInstance"
import { adminLogout, getAllSurvey } from "@/redux/action/adminAction"
import { AppDispatch, RootState } from "@/redux/store"
import { logoutModalAndLoading, survey, ISurveyByGender } from "@/types"
// import { Eye } from "lucide-react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


function Home() {
    const dispath: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state: RootState) => state.admin)
    const [modalData, setModalData] = useState<survey | null>(null)
    const [countByGender, setCountByGender] = useState<ISurveyByGender>({
        Men: 0,
        Women: 0,
        Others: 0
    })
    const [modalAndLoading, setModalAndLoading] = useState<logoutModalAndLoading>({
        modal: false,
        loading: true
    })

    async function handleLogout(): Promise<void> {
        setModalAndLoading({ modal: false, loading: true })
        try {
            await dispath(adminLogout()).unwrap()
            navigate('/login')
            return
        } catch (error) {
            console.log(error)
        } finally {
            setModalAndLoading({ modal: false, loading: false })
        }
    }

    async function fetchData() {
        try {
            await dispath(getAllSurvey()).unwrap()
        } catch (error) {
            console.log(error)
        }
    }
    async function fetchGenders() {
        setModalAndLoading({ loading: true, modal: false })
        try {
            let { data } = await api.get('/gender')
            if (data?.success) {
                setCountByGender({
                    Men: data?.data?.[0]?.count ?? 0,
                    Women: data?.data?.[1]?.count || 0,
                    Others: data?.data?.[2]?.count || 0,
                })
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setModalAndLoading({ loading: false, modal: false })
        }
    }
    function confirmationModal() {
        setModalAndLoading({ modal: true, loading: false })
    }
    useEffect(() => {
        fetchGenders()
        fetchData()
    }, [])
    return (
        <div className="w-full h-screen relative">
            {
                modalAndLoading.modal && (
                    <LogoutConfirmModal handleLogout={handleLogout} setModalAndLoading={setModalAndLoading} />
                )
            }
            { //! USER TO SHOW THE SURVERY MODAL
                modalData && (
                    <SurveyModal data={modalData} onClose={setModalData} />
                )
            }
            <nav className="h-10 bg-[#1A2522] flex justify-center items-center px-5 py-9 shadow-sm shadow-black">
                <div className="capitalize flex w-full items-center justify-between max-md:px-5 px-20">
                    <span className="text-slate-200 tracking-tighter text-3xl">Survey</span>
                    <span
                        className="text-black font-semibold bg-gray-300 px-4 py-1 rounded tracking-tighter shadow-sm shadow-gray-400 hover:cursor-pointer"
                        onClick={confirmationModal}
                    >
                        logout
                    </span>
                </div>
            </nav>
            <div className=" w-full h-full px-10 max-md:px-3 pt-5 bg-[#34a265] ">
                <Card className="h-" x-chunk="A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions.">
                    <CardHeader className='max-md:px-4 max-md:pt-4 pb-1 '>
                        <CardTitle className="flex justify-between">
                            <div>
                                Surveys
                            </div>

                            <div >
                                <div className={`${modalAndLoading?.loading ? 'skeleton' : ''}`}>

                                    {countByGender?.Men}: Men
                                </div>
                                <div className={`${modalAndLoading?.loading ? 'skeleton' : ''}`}>
                                    {countByGender?.Women}: Women
                                </div>
                                <div className={`${modalAndLoading?.loading ? 'skeleton' : ''}`}>
                                    {countByGender?.Others}: Others
                                </div>
                            </div>
                        </CardTitle>
                        <CardDescription>
                            Check users surveys
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='max-md:px-4 pt-0 
                    '>
                        <Table className="pt-0">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Nationality
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Gender
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Created at
                                    </TableHead>
                                    <TableHead>
                                        <span className="sr-only">Actions</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    state.surveys?.length &&
                                    state.surveys?.map((data: survey) => (
                                        <TableList data={data} setModalData={setModalData} key={data?.email} />
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                {/* <Tables setModalData={setModalData} data={data} /> */}

            </div>
            {/* <div className="pt-14 justify-start px-20 max-md:px-0 max-md:justify-center cards bg-[#34a265]">
                {
                    state.surveys?.length &&
                    state.surveys?.map((data: survey) => (
                        <SurveyCard setModalData={setModalData} data={data} key={data?.email} />
                    ))
                }
            </div> */}
        </div>
    )
}

export default Home