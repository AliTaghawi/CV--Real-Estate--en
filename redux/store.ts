import { configureStore } from "@reduxjs/toolkit";

import displayReducer from "@/redux/features/display/displaySlice";

const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
