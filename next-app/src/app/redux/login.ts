import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { PURGE } from "redux-persist";
export interface LoginInfo {
  loading: boolean;
  loginData: Login;
  userName: string;
  password: string;
  error: string | undefined;
}

const initialState: LoginInfo = {
  loading: false,
  loginData: {} as Login,
  userName: "",
  password: "",
  error: undefined,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
  reducers: {
    saveLoginData: (state, action) => {
      state.loginData = action.payload.loginData;
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
  },
});

export const selectLoginData = (state: RootState) =>
  state.persistedReducer.login.loginData;

export const { saveLoginData } = loginSlice.actions;
export default loginSlice.reducer;
