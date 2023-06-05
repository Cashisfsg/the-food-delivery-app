import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Order } from "store";

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),
    endpoints: builder => ({
        fetchOrders: builder.query<Order[], { email: string; phone: string }>({
            query: ({ email, phone }) => ({
                url: "orders",
                params: {
                    email,
                    phone
                }
            })
        })
    })
});

export const { useFetchOrdersQuery, useLazyFetchOrdersQuery } = ordersApi;
