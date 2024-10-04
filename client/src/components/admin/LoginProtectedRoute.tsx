import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
function LoginProtectedRoute({ children }: { children: JSX.Element }) {
    const state = useSelector((state: RootState) => state.admin)
    if (state.admin) {
        return <Navigate to={'/admin'} />
    } else {
        return children
    }
}

export default LoginProtectedRoute