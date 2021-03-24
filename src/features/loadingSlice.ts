import { createSlice } from "@reduxjs/toolkit";
import { State } from "./types";

const initialState = false;

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      return !state;
    },
  },
});

export const { toggleLoading } = loadingSlice.actions;

export const loadingStateSelector = (state: State) => {
  return state.loading;
};

export default loadingSlice.reducer;
