import { survey } from "@/types"
import { CircleX } from "lucide-react"
import { Dispatch, SetStateAction, useRef, useState } from "react"

function SurveyModal({ data, onClose }: { data: survey, onClose: Dispatch<SetStateAction<survey | null>>}) {
    const [isClosing, setIsClosing] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose(null); // Call the parent to remove the modal from the DOM
        }, 1000); // Match this duration to the fade-out animation duration
    }
    return (
        <div ref={ref} className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] max-md:w-5/6 h-[500px] max-md:h-2/3 bg-gray-100 rounded-lg shadow-lg px-3 pt-2 ${isClosing ? 'close' : 'modal'}`}>
            <CircleX onClick={handleClose} className="float-right text-slate-900" />
        </div>
    )
}

export default SurveyModal