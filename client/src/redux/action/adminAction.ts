import { api } from "@/config/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

type adminLogin = {
    email: string,
    password: string
}

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