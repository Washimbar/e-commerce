import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
	id: number;
	name: string;
};

type InitialState = {
	loading: boolean;
	users: User[];
	error: string;
};
const initialState: InitialState = {
	loading: false,
	users: [],
	error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
	return axios
		.get("http://jsonplaceholder.typicode.com/users")
		.then((response) => response.data());
});

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
			state.loading = false;
			state.users = action.payload;
			state.error = '';
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.users = [];
			state.error = 'Something went wrong';
		});
	},
});

export default userSlice.reducer;