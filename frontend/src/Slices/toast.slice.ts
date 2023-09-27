import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastPayload, ToastState } from "Types";
import { INFO } from "Constants";
import type { RootState } from "Store";

const initialState: ToastState = {  
  toasts: [],
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    toast: (state, action: PayloadAction<ToastPayload>) => {
      const { message, severity } = action.payload;
      state.toasts.push({
        message,
        severity: severity || INFO,
        key: new Date().getTime(),
      });
    },
    setToasts: (state, action) => {
      state.toasts = action.payload;
    },
  },
});

export const { toast, setToasts } = toastsSlice.actions;

export const getLastToast = (state: RootState) => state.toasts.toasts;

export default toastsSlice.reducer;
