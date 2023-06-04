import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./slices";
import { shopsApi, goodsApi, ordersApi } from "./api";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        [shopsApi.reducerPath]: shopsApi.reducer,
        [goodsApi.reducerPath]: goodsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(shopsApi.middleware)
            .concat(goodsApi.middleware)
            .concat(ordersApi.middleware)
});
