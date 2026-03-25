import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "light" | "dark" | "system";
}

const initialState: ThemeState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<"light" | "dark" | "system">) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = themeSlice.actions;
