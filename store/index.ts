import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./slices/sidebar-slice";
import { themeSlice } from "./slices/theme-slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
