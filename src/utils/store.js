import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
// import bookReducer from "./bookSlice";
import responseReducer from "./responseSlice";

const store = configureStore({
    reducer: {
        data: dataReducer,
        response: responseReducer
    }
})

export default store;