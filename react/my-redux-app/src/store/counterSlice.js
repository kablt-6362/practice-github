import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  count: 0,
  step: 1,
};

const ctSlice = createSlice({
  name: "first-count",
  initalState: initalState,
  reducers: {
    countIncrement: (state) => {
      state.count = state.count + 1;
    },
    countDecrement: (state) => {
      state.count = state.count - 1;
    },
    stepSet: (state, action) => {
      state.step = Number(action.payload);
    },
  },
});

export const { countIncrement, countDecrement, stepSet } = ctSlice.actions;
export default ctSlice.reducer;
