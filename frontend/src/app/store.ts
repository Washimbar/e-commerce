import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./../features/api/apiSlice";

const store = configureStore({
	reducer: {
		api: apiReducer,
	},
});

export default store;
