import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filterSlice";
import { contactsApi } from "./contacts/contactsApi";
import { userApi } from "./user/userApi";
import { persistedReducer } from "./user/authSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    userApi.middleware,
  ],
});

export const persistor = persistStore(store);
