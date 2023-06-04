import React, { useState } from "react";
import { useStateSelector } from "store";

import { Sidebar, ShowCase } from "containers";

export const Shop: React.FC = () => {
    const [filteredID, setFilteredID] = useState(
        useStateSelector(state => state.order.shop_id)
    );

    return (
        <article className="grid h-full grid-cols-[3fr_7fr] gap-8">
            <Sidebar
                filteredID={filteredID}
                setFilteredID={setFilteredID}
            />
            <ShowCase
                filteredID={filteredID}
                setFilteredID={setFilteredID}
            />
        </article>
    );
};
