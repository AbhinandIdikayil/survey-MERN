import { survey } from "@/types"
import { CircleX } from "lucide-react"
import { Dispatch, SetStateAction, useRef, useState } from "react"
import { CardContent } from "../ui/card";

function SurveyModal({ data, onClose }: { data: survey, onClose: Dispatch<SetStateAction<survey | null>> }) {
    const [isClosing, setIsClosing] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose(null); // Call the parent to remove the modal from the DOM
        }, 500); // Match this duration to the fade-out animation duration
    }
    return (
        <div ref={ref} style={{zIndex:99}} className={`fixed top-1/2 max-sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px]  h-[450px] max-md:h-[400px] max-md:w-5/6 bg-gray-100 rounded-lg shadow-md px-3 pt-2 border border-solid ${isClosing ? 'close' : 'modal'}`}>
            <div className="flex justify-between pb-2 capitalize h-[30px]">
                <h1 className="font-semibold tracking-tight text-gray-800">Survey details</h1>
                <CircleX onClick={handleClose} className=" text-slate-900" />
            </div>
            <hr />
            <CardContent className="p-3 pt-4 text-sm h-4/5">
                <div className="grid gap-1 tracking-tight h-full">
                    <ul className="grid gap-3 h-full">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Username
                            </span>
                            <span> {data?.username} </span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Email
                            </span>
                            <span> {data?.email} </span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Phone
                            </span>
                            <span> {data?.phone} </span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Gender</span>
                            <span> {data.gender} </span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Nationality</span>
                            <span> {data.nationality} </span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Address</span>
                            <h1 className="w-28 text-ellipsis whitespace-nowrap overflow-hidden"> {data?.address} </h1>
                        </li>
                        <li className="flex-col items-center justify-between font-semibold w-full h-full">
                            <span className="text-muted-foreground">Message</span>
                            <div className="modal-message whitespace-normal break-words bg-white w-full rounded px-1 py-1 h-36 max-md:h-28 overflow-y-scroll">
                                {data?.message}
                            </div>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </div>
    )
}

export default SurveyModal