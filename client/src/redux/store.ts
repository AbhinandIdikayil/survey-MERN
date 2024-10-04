import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import adminSlice from "./reducers/adminReducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    admin:adminSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[ REHYDRATE , FLUSH, PAUSE , PERSIST , PURGE , REGISTER]
            }
        })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store