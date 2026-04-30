import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  pass: "",
};

const authInfoSlice = createSlice({
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

export default authInfoSlice.reducer;

export const { setInfo, deleteInfo } = authInfoSlice.actions;
