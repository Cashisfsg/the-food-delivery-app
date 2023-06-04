import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Good } from "store/types";

export const goodsApi = createApi({
    reducerPath: "goodsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/"
    }),
    endpoints: builder => ({
        fetchGoods: builder.query<Good[], undefined>({
            query: () => ({
                url: "goods"
            })
        })
    })
});

export const { useFetchGoodsQuery } = goodsApi;
