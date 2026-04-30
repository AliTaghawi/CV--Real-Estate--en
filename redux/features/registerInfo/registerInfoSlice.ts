import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  pass: "",
};

const registerInfoSlice = createSlice({
  name: "authInfo",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.email = action.payload.email;
      state.pass = action.payload.pass || "";
    },
    deleteInfo: (state) => {
      state.email = "";
      state.pass = "";
    },
  },
});

export default registerInfoSlice.reducer;

export const { setInfo, deleteInfo } = registerInfoSlice.actions;
