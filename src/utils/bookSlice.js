import { createSlice } from "@reduxjs/toolkit";

const bookSlice=createSlice({
    name: 'book',
    initialState: {},
    reducers: {
        setBook:(state,action)=>{
            state=action.payload;
        }
    }
})

export const { setBook }=bookSlice.actions
export default bookSlice.reducer