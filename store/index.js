import { configureStore } from "@reduxjs/toolkit";

import scrollPositionReducer from "./scrollPosition";

const store = configureStore({
  reducer: {
    scrollPosition: scrollPositionReducer,
  },
});

export default store;
