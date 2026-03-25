import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  collapsed: boolean;
  mobileOpen: boolean;
}

const initialState: SidebarState = {
  collapsed: false,
  mobileOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
    toggleMobile: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
    setMobileOpen: (state, action) => {
      state.mobileOpen = action.payload;
    },
  },
});

export const { toggleCollapsed, setCollapsed, toggleMobile, setMobileOpen } =
  sidebarSlice.actions;
