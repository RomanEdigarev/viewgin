import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData } from "../api/api";
import { Data, Fetch, State } from "./types";

const initialState: Fetch<Data> = {
  statusFetching: "ok",
  data: {
    dataForLineCharts: [],
    dataForDonutCharts: [],
  },
};

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (): Promise<Data> => {
    return await getData();
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending.type]: (state) => {
      state.statusFetching = "loading";
    },
    [fetchData.fulfilled.type]: (state, action: PayloadAction<Data>) => {
      state.data = action.payload;
      state.statusFetching = "ok";
    },
    [fetchData.rejected.type]: (state) => {
      state.statusFetching = "error";
    },
  },
});

export const lineChartDataSelector = (state: State) => {
  return state.dataForCharts.data.dataForLineCharts;
};
export const donutChartDataSelector = (state: State) => {
  return state.dataForCharts.data.dataForDonutCharts;
};
export default dataSlice.reducer;
