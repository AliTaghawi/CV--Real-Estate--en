import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuShow: false,
};

const displaySlice = createSlice({
  name: "displays",
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.mobileMenuShow = true;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuShow = false;
    },
  },
});

export default displaySlice.reducer;

export const { openMobileMenu, closeMobileMenu } = displaySlice.actions;
