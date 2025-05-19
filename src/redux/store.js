import { configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistCombineReducers,
  REGISTER,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import AuthProvider from "./slices/auth"
import ModalsReducer from "./slices/modalsAdmin";

const persistConfig = {
  key: "kodakofi",
  storage,
}

const persistedReducer = persistCombineReducers(persistConfig, {
  auth: AuthProvider,
  modals: ModalsReducer,
})

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    })
  },
})

export const persistor = persistStore(store)
export default store
