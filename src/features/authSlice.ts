import { AuthData, DataForAuth, Fetch, State } from "./types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../api/api";

const initialState: Fetch<AuthData> = {
  statusFetching: "ok",
  data: {
    isAuth: false,
  },
};

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (loginData: DataForAuth): Promise<AuthData> => {
    return await login({ ...loginData });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLogin.pending.type]: (state) => {
      state.statusFetching = "loading";
    },
    [fetchLogin.fulfilled.type]: (state, action: PayloadAction<AuthData>) => {
      state.data = action.payload;
      state.statusFetching = "ok";
    },
    [fetchLogin.rejected.type]: (state) => {
      state.statusFetching = "error";
    },
  },
});

export const isAuthSelector = (state: State) => {
  return state.auth.data.isAuth;
};

export const authFetchStatusSelector = (state: State) => {
  return state.auth.statusFetching;
};

export default authSlice.reducer;
