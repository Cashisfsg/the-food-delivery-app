import React from "react";
import { useLazyFetchOrdersQuery } from "store";

import { SearchOrders, OrderInfo } from "components";

export const History: React.FC = () => {
    const [getOrders, { data: orders }] = useLazyFetchOrdersQuery({});

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const serializedData = Object.fromEntries(formData.entries());
        const { email, phone } = serializedData;

        getOrders({ email, phone } as { email: string; phone: string });
    };

    return (
        <article className="grid h-full grid-rows-[max-content,_auto] gap-8">
            <SearchOrders onSubmitHandler={onSubmitHandler} />
            <section className="h-full w-full overflow-auto rounded-md border-2 px-8 py-4 shadow-md">
                {orders && orders.length ? (
                    orders.map((order, index) => (
                        <OrderInfo
                            key={order.id}
                            order={order}
                            index={index + 1}
                        />
                    ))
                ) : (
                    <h2 className="text-center text-2xl font-bold text-red-400">
                        No find results
                    </h2>
                )}
            </section>
        </article>
    );
};
