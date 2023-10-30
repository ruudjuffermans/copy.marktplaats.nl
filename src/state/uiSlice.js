import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
  gdprModal: false,
  userMenu: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    LOGIN_OPEN: (state) => {
      state.loginModal = true;
    },
    LOGIN_CLOSE: (state) => {
      state.loginModal = false;
    },
    GDPR_OPEN: (state) => {
      state.gdprModal = true;
    },
    GDPR_CLOSE: (state) => {
      state.gdprModal = false;
    },
    USERMENU_OPEN: (state) => {
      state.userMenu = true;
    },
    USERMENU_CLOSE: (state) => {
      state.userMenu = false;
    },
  },
});

export default uiSlice.reducer;
export const {
  LOGIN_CLOSE,
  LOGIN_OPEN,
  GDPR_CLOSE,
  GDPR_OPEN,
  USERMENU_CLOSE,
  USERMENU_OPEN,
} = uiSlice.actions;
