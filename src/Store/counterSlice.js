import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload;
      console.log(state.width.width);
    },
  },
});

export const { setWidth } = counterSlice.actions;
export default counterSlice.reducer;
