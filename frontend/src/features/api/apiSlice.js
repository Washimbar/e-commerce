import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	data: [],
	error: "",
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await response.json();
	return data;
});

const apiSlice = createSlice({
	name: "api",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => { 
            state.loading = false;
            state.error = action.error.message;
        })
	},
});

export const apiActions = apiSlice.actions
export const apiReducer = apiSlice.reducer