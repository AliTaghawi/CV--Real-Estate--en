import { configureStore } from "@reduxjs/toolkit";

import displayReducer from "@/redux/features/display/displaySlice";
import authInfoReducer from "@/redux/features/authInfo/authInfoSlice";

const store = configureStore({
  reducer: {
    display: displayReducer,
    authInfo: authInfoReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
