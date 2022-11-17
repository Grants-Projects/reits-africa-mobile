import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {},
};
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount } = accountSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export default accountSlice.reducer;
