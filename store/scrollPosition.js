import { createSlice } from "@reduxjs/toolkit";

const initialScrollPosition = { top: 0 };

const scrollPositionSlice = createSlice({
  name: "scrollPosition",
  initialState: initialScrollPosition,
  reducers: {
    topChanger(state, action) {
      state.top = action.payload;
    },
  },
});

export const scrollPositionActions = scrollPositionSlice.actions;

export default scrollPositionSlice.reducer;
