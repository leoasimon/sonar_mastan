import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import * as booksApi from "./booksApi";
import { Book } from "./types";

export interface BooksState {
  value: Book[];
  status: "idle" | "loading" | "failed";
  current?: Book;
}

const initialState: BooksState = {
  value: [],
  status: "idle",
};

export const fetchBooks = createAsyncThunk(
  "books/fetch",
  async (_: undefined, { rejectWithValue }) => {
    const response = await booksApi.fetch();
    if (response.status !== 200) {
      return rejectWithValue("An error occured");
    } else {
      return response.data;
    }
  }
);

export const fetchBook = createAsyncThunk(
  "books/fetchOne",
  async (id: number, { rejectWithValue }) => {
    const response = await booksApi.fetchOne(id);
    if (response.status !== 200) {
      return rejectWithValue("An error occured");
    } else {
      return response.data;
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
        state.current = undefined;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.status = "idle";
        state.current = action.payload;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectBooks = (state: RootState) => state.books.value;
export const selectBookFromList = (id?: string) => (state: RootState) =>
  state.books.value.find((book) => {
    return book.url === `${booksApi.apiUrl}/${id}`;
  });

export default booksSlice.reducer;
