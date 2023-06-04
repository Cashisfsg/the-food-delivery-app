import React from "react";
import { useFetchShopsQuery, useStateSelector } from "store";

interface SidebarProps {
    filteredID: number | null;
    setFilteredID: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Sidebar: React.FC<SidebarProps> = ({
    filteredID,
    setFilteredID
}) => {
    const { isSuccess, data: shops } = useFetchShopsQuery(undefined);

    const shopID = useStateSelector(state => state.order.shop_id);

    return (
        <aside className="rounded border-2 px-8 py-4 shadow-md">
            <h2 className="mb-6 text-center text-4xl font-bold">Shops</h2>
            <ul className="flex flex-col gap-4">
                {isSuccess &&
                    shops.map(shop => (
                        <li key={shop.id}>
                            <button
                                onClick={() => setFilteredID(shop.id)}
                                aria-selected={shop.id === filteredID}
                                disabled={shopID !== shop.id && !!shopID}
                                className="w-full overflow-hidden rounded border-2 px-8 py-4 text-lg font-medium tracking-wide shadow-md hover:bg-neutral-100 disabled:bg-neutral-200 aria-selected:relative aria-selected:after:absolute aria-selected:after:right-0 aria-selected:after:top-0 aria-selected:after:h-full aria-selected:after:w-1 aria-selected:after:bg-red-500"
                            >
                                {shop.name}
                            </button>
                        </li>
                    ))}
            </ul>
        </aside>
    );
};
