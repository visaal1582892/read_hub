import { createSlice } from '@reduxjs/toolkit';

const dataSlice=createSlice({
    name: 'data',
    initialState: {
        books: [],
        loading: false,
        error: null
    },
    reducers: {
        setLoading: (state,action) => {
            state.loading = action.payload;
        },
        setBooks: (state, action) => {
            state.books=action.payload;
        },
        setError: (state,action) => {
            state.error=action.payload;
        }
    }
})

export const { setLoading, setBooks, setError } = dataSlice.actions;
export default dataSlice.reducer;