import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from '../features/cake/cakeSlice';
// import userSlice from "../features/user/userSlice";

const store = configureStore({
    reducer: {
        cake: cakeSlice,
        // user: userSlice,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch