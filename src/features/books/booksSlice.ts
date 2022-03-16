import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "./types";
import * as booksApi from './booksApi'
import { RootState } from "../../app/store";

export interface BooksState {
    value: Book[];
    status: 'idle' | 'loading' | 'failed'
}

const initialState: BooksState = {
    value: [],
    status: 'idle'
}

export const fetchBooks = createAsyncThunk(
    'books/fetch',
    async (_: undefined, { rejectWithValue }) => {
        const response = await booksApi.fetch();
        if (response.status !== 200) {
            return rejectWithValue("An error occured")
        } else {
            return response.data;
        }
    }
)

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = action.payload;
        })
        .addCase(fetchBooks.rejected, (state) => {
            state.status = 'failed';
        })
    }
})

export const selectBooks = (state: RootState) => state.books.value;
export const selectBook = (id: number) => (state: RootState) => state.books.value.find(book => {
    return book.url=`${booksApi.apiUrl}/${id}`;
})

export default booksSlice.reducer