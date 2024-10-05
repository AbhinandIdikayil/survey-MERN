import { adminReducerType } from "@/types";
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { adminLogin, adminLogout, getAllSurvey } from "../action/adminAction";
import { handleAuthError } from "./authError";

const initialState: adminReducerType = {
    loading: false,
    admin: false,
    surveys: [],
    err: null,
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.err = null
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<adminReducerType>) => {
        builder
            .addCase(adminLogin.pending, (state) => {
                state.loading = true
                state.admin = false
                state.err = null
            })
            .addCase(adminLogin.fulfilled, (state) => {
                state.loading = false
                state.admin = true
                state.err = null
            })
            .addCase(adminLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.admin = false
                state.err = payload
            })
            .addCase(adminLogout.pending, (state) => {
                state.loading = true
                state.admin = true
                state.err = null
            })
            .addCase(adminLogout.fulfilled, (state) => {
                state.loading = false
                state.admin = false
                state.err = null
            })
            .addCase(adminLogout.rejected, (state, { payload }) => {
                state.loading = false
                state.admin = true
                state.err = payload
            })
            .addCase(getAllSurvey.pending, (state) => {
                state.loading = true
                state.err = null
            })
            .addCase(getAllSurvey.fulfilled, (state, { payload }) => {
                state.loading = false
                state.surveys = payload
                state.err = null
            })
            .addCase(getAllSurvey.rejected, (state, { payload }) => {
                state.loading = false
                state.surveys = []
                handleAuthError(state, payload)
            })
    }
})

export default adminSlice.reducer