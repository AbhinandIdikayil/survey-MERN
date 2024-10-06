import { logoutModalAndLoading } from "@/types"
import { LoaderCircle } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react"

function LogoutConfirmModal({ handleLogout, setModalAndLoading }: {
    handleLogout: () => Promise<void>;
    setModalAndLoading: Dispatch<SetStateAction<logoutModalAndLoading>>;
}) {

    const [isClosing, setIsClosing] = useState<logoutModalAndLoading>({
        loading: false,
        modal: false
    });

    return (
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] max-md:w-[300px] h-[200px] bg-gray-100 z-50 rounded-md shadow-md px-2 py-3
         ${isClosing.modal ? 'close' : 'modal'} `}>
            <h1 className=" px-2 text-center capitalize text-3xl font-semibold tracking-tight">
                Are you sure you want to logout
            </h1>
            <div className="flex justify-center items-center h-4/6">
                <div>
                    {
                        !isClosing?.loading && (
                            <button onClick={() => {
                                setIsClosing({ modal: true, loading: false })
                                setTimeout(() => {
                                    setModalAndLoading((prev) => ({ ...prev, modal: false }));
                                }, 1000);
                            }
                            } className="mr-2 capitalize px-4 py-2 rounded-md font-semibold text-white bg-green-500">
                                cancel
                            </button>
                        )
                    }

                    {
                        !isClosing?.loading && (
                            <button onClick={() => {
                                setIsClosing({ modal: false, loading: true })
                                setTimeout(() => {
                                    handleLogout()
                                }, 1000);
                            }} className="ml-2 capitalize px-4  py-2 rounded-md font-semibold text-white bg-red-500 ">
                                logout
                            </button>
                        )
                    }
                    {
                        isClosing?.loading && (
                            <button className="ml-2 capitalize rounded-md px-6 py-2 font-semibold text-white bg-red-500 ">
                                <LoaderCircle className="animate-spin mt" />
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default LogoutConfirmModal