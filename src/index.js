import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "store";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Layout, Shop, ShoppingCart, History } from "pages";

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Shop />
            },
            {
                path: "/cart",
                element: <ShoppingCart />
                // lazy: () => import("./pages/ShoppingCart")
            },
            {
                path: "/history",
                element: <History />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
