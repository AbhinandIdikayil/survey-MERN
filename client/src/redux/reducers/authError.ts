import { toast } from "react-toastify";


export const handleAuthError = (state: any, payload: any) => {
    console.log(payload,'----------')
    if (payload?.status == 401 || 403) {
        state.admin = false;
        state.err = null
    } else if(payload === 'blocked') {
        toast.error('you are blocked',{position:'top-center'})
    }
};