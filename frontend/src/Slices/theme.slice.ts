import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'Store';

interface ThemeState {
  mode: 'light' | 'dark';
  isLight: boolean;
}

const initialState: ThemeState = {
  mode: 'dark',
  isLight: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      state.isLight = action.payload === 'light';
    },
    setTheme: (state, action: PayloadAction<ThemeState>) => ({
      ...action.payload,
    }),
  },
});

export const { setTheme, setThemeMode } = themeSlice.actions;

export const getThemeMode = (state: RootState) => state.theme.mode;
export const getIsLightMode = (state: RootState) => state.theme.isLight;

export default themeSlice.reducer;
