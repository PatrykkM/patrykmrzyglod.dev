import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { isUserSent } from "./slices/userSentForm";

const PersistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(PersistConfig, isUserSent.reducer);
export const store = configureStore({
	reducer: {
		userSentFrom: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					"persist/PERSIST",
					"persist/REHYDRATE",
					"persist/PAUSE",
					"persist/PURGE",
					"persist/REGISTER",
				],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
