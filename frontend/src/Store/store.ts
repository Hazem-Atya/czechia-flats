import { configureStore } from "@reduxjs/toolkit";
import { flatReducer, themeReducer, toastReducer } from "Slices";

/**
 * State Reducers
 */
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    toasts: toastReducer,
    flats: flatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
