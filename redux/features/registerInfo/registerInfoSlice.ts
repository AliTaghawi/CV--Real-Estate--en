import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const registerInfoSlice = createSlice({
  name: "authInfo",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.email = action.payload.email;
    },
    deleteInfo: (state) => {
      state.email = "";
    },
  },
});

export default registerInfoSlice.reducer;

export const { setInfo, deleteInfo } = registerInfoSlice.actions;
