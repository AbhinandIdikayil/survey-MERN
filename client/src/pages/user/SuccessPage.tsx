import { useSubmitedContext } from '@/context/Submited';
import s from '../../animation/Animation - 1728036169958.json'
import Lottie from "lottie-react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function SuccessPage() {
    const { submited } = useSubmitedContext()
    const navigate = useNavigate()
    useEffect(() => {
        if(!submited){
            return navigate('/')
        }
    }, [])
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex-col items-center justify-center relative h-full">
                <Lottie className="h-96" animationData={s} loop={false} />
                <h1 className="text-center text-white text-3xl capitalize pop-up max-md:text-xl">successfully submited</h1>
            </div>
        </div>
    )
}

export default SuccessPage