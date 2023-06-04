import React, { useMemo } from "react";
import { useFetchGoodsQuery } from "store";

import { GoodsCard } from "components";

interface ShowCaseProps {
    filteredID: number | null;
    setFilteredID: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ShowCase: React.FC<ShowCaseProps> = ({
    filteredID,
    setFilteredID
}) => {
    const { isSuccess, data: goods } = useFetchGoodsQuery(undefined);

    const filteredGoods = useMemo(() => {
        return filteredID && goods
            ? goods.filter(good => {
                  return good.shop_id === filteredID;
              })
            : goods;
    }, [filteredID, goods]);

    return (
        <section className="grid h-full grid-cols-2 gap-8 overflow-y-auto rounded border-2 px-8 py-4 shadow-md">
            {isSuccess &&
                filteredGoods &&
                filteredGoods.map(good => (
                    <GoodsCard
                        key={good.id}
                        good={good}
                        setFilteredID={setFilteredID}
                    />
                ))}
        </section>
    );
};
