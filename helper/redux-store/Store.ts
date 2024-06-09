import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices-functions/StoreSlice";

export const ReduxStore = configureStore({
  reducer: cartReducer,
});

export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppDispatch = typeof ReduxStore.dispatch;
