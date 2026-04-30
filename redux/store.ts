import { configureStore } from "@reduxjs/toolkit";

import displayReducer from "@/redux/features/display/displaySlice";
import registerInfoReducer from "@/redux/features/registerInfo/registerInfoSlice";

const store = configureStore({
  reducer: {
    display: displayReducer,
    registerInfo: registerInfoReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
