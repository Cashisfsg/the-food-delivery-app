import type { store } from "./store";

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface Shop {
    id: number;
    name: string;
}

export interface Good {
    id: number;
    name: string;
    price: number;
    url: string;
    shop_id: number;
    amount: number;
}

export interface Cart {
    goods: Good[];
    shop_id: number | null;
    totalCost: number;
}

export interface Order {
    id?: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    cart: Cart;
    timestamp: Date | string | null;
}
