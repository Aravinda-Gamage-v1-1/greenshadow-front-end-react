import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../store/slices/AuthSlice.ts"

const store = configureStore({
    reducer: {
        auth:authReducer,
    }
})

export default store;