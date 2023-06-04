import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStore, Good, Cart, Order } from "store/types";

const initialState: Cart = JSON.parse(
    localStorage.getItem("cart") ||
        JSON.stringify({ goods: [], shop_id: null, totalCost: 0 })
);

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Good>) => {
            const newGood = action.payload;

            if (state.goods.some(good => good.id === newGood.id)) {
                state.goods = state.goods.map(good => {
                    if (good.id === newGood.id) {
                        return { ...good, amount: good.amount + 1 };
                    }
                    return good;
                });
            } else {
                state.goods.push({ ...newGood, amount: 1 });
                state.shop_id = newGood.shop_id;
            }

            state.totalCost = state.goods.reduce(
                (sum, good) => sum + good.amount * good.price,
                0
            );

            localStorage.setItem("cart", JSON.stringify(state));
        },
        changeAmount: (
            state,
            action: PayloadAction<{ id: number; amount: number }>
        ) => {
            state.goods = state.goods.map(good => {
                if (good.id === action.payload.id) {
                    return { ...good, amount: action.payload.amount };
                }
                return good;
            });

            state.totalCost = state.goods.reduce(
                (sum, good) => sum + good.amount * good.price,
                0
            );

            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
            state.goods = state.goods.filter(
                good => good.id !== action.payload.id
            );

            if (state.goods.length === 0) {
                state.totalCost = 0;
                state.shop_id = null;
                localStorage.removeItem("cart");
                return;
            }

            state.totalCost = state.goods.reduce(
                (sum, good) => sum + good.amount * good.price,
                0
            );

            localStorage.setItem("cart", JSON.stringify(state));
        }
    },
    extraReducers: builder =>
        builder.addCase(confirmOrder.fulfilled, state => {
            localStorage.removeItem("cart");

            return initialState;
        })
});

export const confirmOrder = createAsyncThunk(
    "order/confirm",
    async (
        {
            name,
            email,
            phone,
            address
        }: { name: string; email: string; phone: string; address: string },
        thunkAPI
    ) => {
        const cart = (thunkAPI.getState() as RootStore).order;

        if (cart.goods.length === 0) return;

        const order: Order = {
            name,
            email,
            phone,
            address,
            cart,
            timestamp: new Date()
        };

        const url = "http://localhost:3001/orders";

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        };

        await fetch(url, requestOptions);
    }
);

export const { reducer: orderReducer, actions: orderActions } = orderSlice;
