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
        },
        addBook: (state,action) => {
            state.books.unshift(action.payload);
        }
    }
})

export const { setLoading, setBooks, setError, addBook } = dataSlice.actions;
export default dataSlice.reducer;