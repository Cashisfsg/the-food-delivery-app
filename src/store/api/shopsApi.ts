import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Shop } from "store";

export const shopsApi = createApi({
    reducerPath: "shopsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),
    endpoints: builder => ({
        fetchShops: builder.query<Shop[], undefined>({
            query: () => ({
                url: "shops"
            })
        })
    })
});

export const { useFetchShopsQuery } = shopsApi;
