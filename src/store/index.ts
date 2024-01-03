import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import joinSlice from "./joinSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    join: joinSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
