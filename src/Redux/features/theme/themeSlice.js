import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    themeToggle: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { toggle, decrement, themeToggle } = themeSlice.actions;

export default themeSlice.reducer;
