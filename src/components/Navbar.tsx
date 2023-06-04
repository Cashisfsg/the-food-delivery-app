import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
    const routes = [
        {
            name: "shop",
            path: "/"
        },
        {
            name: "shopping cart",
            path: "/cart"
        },
        {
            name: "history",
            path: "/history"
        }
    ];

    const location = useLocation();

    return (
        <nav className="h-[70px] shadow-md">
            <ul
                role="tablist"
                className="container flex"
            >
                {routes.map(route => (
                    <li
                        key={route.path}
                        role="presentation"
                    >
                        <Link
                            to={route.path}
                            role="tab"
                            // aria-controls="tabs-home"
                            aria-selected={location.pathname === route.path}
                            className="my-2 block px-7 py-4 text-base font-medium uppercase leading-tight tracking-wide text-neutral-500 hover:isolate hover:bg-neutral-100 focus:isolate aria-selected:border-b-2 aria-selected:border-blue-500 aria-selected:text-blue-500"
                        >
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
