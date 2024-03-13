import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./slices/apiSlices";

const store = configureStore({
	reducer: {
		api: apiReducer,
	},
});

export default store