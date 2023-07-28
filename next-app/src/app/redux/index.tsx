"use client";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import menuReducer, { fetchMenu } from "./menu";
import loginReducer from "./login";
import { ReactNode, Reducer, useContext, useEffect } from "react";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  menu: menuReducer,
  login: loginReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

interface ReduxProviderProps {
  children: ReactNode;
}
export function ReduxProvider({ children }: ReduxProviderProps) {
  store.dispatch(fetchMenu());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
