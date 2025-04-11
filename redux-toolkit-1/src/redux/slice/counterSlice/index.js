import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterState: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      console.log(">> INCREMENT ACTION CALLED", state);

      state.counterState += 1;
    },

    decrement: (state) => {
      console.log(">> DECREMENT ACTION CALLED", state);

      state.counterState -= 1;
    },

    change: (state, action) => {
      state.counterState += action.payload;
    },
  },
});

// export actions
export const { increment, decrement, change } = counterSlice.actions;

// default export reducer
export default counterSlice.reducer;
