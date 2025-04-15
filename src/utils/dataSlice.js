import { createSlice } from '@reduxjs/toolkit';

const dataSlice=createSlice({
    name: 'data',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        setLoading: (state,action) => {
            state.loading = action.payload;
        },
        setData: (state, action) => {
            state.data=action.payload;
        },
        setError: (state,action) => {
            state.error=action.payload;
        }
    }
})

export const { setLoading, setData, setError } = dataSlice.actions;
export default dataSlice.reducer;