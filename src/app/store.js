import { configureStore } from "@reduxjs/toolkit";
import { apiSplice } from "../api/apiSplice";

export const store = configureStore({
    reducer: {
        [apiSplice.reducerPath]: apiSplice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSplice.middleware),
});