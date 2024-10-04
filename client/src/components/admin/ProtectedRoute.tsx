import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
function ProtectedRoute({ children }: { children: JSX.Element }) {
    const state = useSelector((state: RootState) => state.admin)
    if (state.admin) {
        return children
    } else {
        return <Navigate to={'/login'} />
    }
}

export default ProtectedRoute