import {
  CaseReducer,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { metadata } from "./../layout";
import { useContext } from "react";
import { GeneralContext } from "../contexts/GeneralContext";
import { getLoginByParams } from "../lib/logins";
import { RootState } from ".";
import { PURGE } from "redux-persist";
export interface LoginInfo {
  loading: boolean;
  loginData: Login;
  error: string | undefined;
}

const initialState: LoginInfo = {
  loading: false,
  loginData: {} as Login,
  error: undefined,
};

export const fetchUser = createAsyncThunk("login/fetchUser", async () => {
  const { apiPoint, userName, password } = useContext(GeneralContext);
  const res: Promise<Login> = getLoginByParams(userName, password, apiPoint);
  return res;
});

//type SaveLoginDataAction = CaseReducer<LoginInfo, PayloadAction<Login>>;

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    // builder.addCase(fetchUser.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(fetchUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.loginData = action.payload;
    // });
    // builder.addCase(fetchUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.loginData = {} as Login;
    //   state.error = action.error.message;
    // }),
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },

  reducers: {
    saveLoginData: (state, action: PayloadAction<Login>) => {
      state.loginData = action.payload;
    },
  },
});

export const selectLoginData = (state: RootState) =>
  state.persistedReducer.login.loginData;

export const { saveLoginData } = loginSlice.actions;
export default loginSlice.reducer;
