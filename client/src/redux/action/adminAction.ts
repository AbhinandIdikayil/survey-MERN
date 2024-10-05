import { api } from "@/config/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

type adminLogin = {
    email: string,
    password: string
}
interface RejectedError {
    message: string;
    status?: number;
}

 const handleAsyncThunkError = (error: any): RejectedError => {
    if (error instanceof AxiosError) {
        // Check for token-related issues
        if (error.response?.status === 401 || error.response?.status === 403) {
            return { message: 'Session expired. Please log in again.', status: error.response.status };
        }
    }
    // Return a generic error message for any other error
    return { message: 'Something went wrong. Try again later.', status: error?.response?.status };
};

export const adminLogin = createAsyncThunk(
    'admin/login',
    async (formData: adminLogin, { rejectWithValue }) => {
        try {
            const { data } = await api.post('/login', { data: formData })
            return data;
        } catch (error: any) {
            if (error instanceof AxiosError) {
                if (error && error.response && error?.response?.data && error.response.data?.message) {
                    return rejectWithValue(error.response.data)
                }
            }
        }
    }
)

export const adminLogout = createAsyncThunk(
    'admin/logout',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.post('/logout')
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getAllSurvey = createAsyncThunk(
    'admin/surveys',
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await api.get('/surveys')
            return data?.data
        } catch (error) {
            const rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)