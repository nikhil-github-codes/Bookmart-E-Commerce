import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import {AuthSlice} from "./Slice/AuthSlice";
import {Cartslice} from "./Slice/Cartslice";
// import {Authslice} from "./Slices/Authslice";

const reducers = combineReducers({
  auth: AuthSlice.reducer,
  cartdata:Cartslice.reducer
 
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
 // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
