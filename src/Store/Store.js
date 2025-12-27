// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import routeReducer from "./routesSlice.js";

export const store = configureStore({
  reducer: {
    width: counterReducer,
    route: routeReducer,
  },
});

export default store;
