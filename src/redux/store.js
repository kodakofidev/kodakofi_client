import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import authReducer from "./slices/auth";
import profileReducer from "./slices/profile";
import constants from "../configs/constant";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: "kodakofi",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
