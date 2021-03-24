import { configureStore } from "@reduxjs/toolkit";
import dataForCharts from "./dataSlice";
import auth from "./authSlice";
import loading from "./loadingSlice";
import { State } from "./types";

export const store = configureStore<State>({
  reducer: { dataForCharts, auth, loading },
});
