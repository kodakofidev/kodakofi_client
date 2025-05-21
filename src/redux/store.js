import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  REGISTER,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthProvider from "./slices/auth";
import constants from "../configs/constant";
import ModalsReducer from "./slices/modalsAdmin";
import profileReducer from "./slices/profile";
import orderReducer from "./slices/orderSlice";
const persistConfig = {
  key: "kodakofi",
  storage,
};
const persistedReducer = persistCombineReducers(persistConfig, {
  auth: AuthProvider,
  modals: ModalsReducer,
  profile: profileReducer,
  order: orderReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  devTools: !constants.isDevelopment,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    });
  },
});

export const persistor = persistStore(store);
export default store;
