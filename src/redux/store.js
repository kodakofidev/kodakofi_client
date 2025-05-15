import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "kodakofi",
  storage,
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {},
})

export const persistor = persistStore(store)
export default store
