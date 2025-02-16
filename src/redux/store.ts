import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { isUserSent } from "./slices/userSentForm";
import storage from "./storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSentFrom"],
};

const persistedReducer = persistReducer(persistConfig, isUserSent.reducer);

export const store = configureStore({
  reducer: {
    userSentFrom: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
