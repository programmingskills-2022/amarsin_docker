"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import menuReducer, { fetchMenu } from "./Menu";
import { ReactNode, useContext } from "react";
import { LoginContext } from "@/app/contexts/LoginContext";

const store = configureStore({
  reducer: { menu: menuReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

interface ReduxProviderProps {
  children: ReactNode;
}
export function ReduxProvider({ children }: ReduxProviderProps) {
  const { login } = useContext(LoginContext);
  console.log(login?.Data?.result.userId);
  store.dispatch(fetchMenu());
  return <Provider store={store}>{children}</Provider>;
}
