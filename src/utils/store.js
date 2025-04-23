import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import bookReducer from "./bookSlice";

const store = configureStore({
    reducer: {
        data: dataReducer,
        book: bookReducer
    }
})

export default store;