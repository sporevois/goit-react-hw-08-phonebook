import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filterSlice";
import { contactsApi } from "./contacts/contactsSlice";

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
})
