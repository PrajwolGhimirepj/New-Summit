import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoute: "home",
};

const routeSlice = createSlice({
  name: "Route",
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
  },
});

export const { setRoute } = routeSlice.actions;
export default routeSlice.reducer;
