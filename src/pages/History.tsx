import React from "react";
import { useLazyFetchOrdersQuery } from "store";

import { SearchOrders, OrderInfo } from "components";

interface SearchFields {
    email: HTMLInputElement;
    phone: HTMLInputElement;
}

export const History: React.FC = () => {
    const [getOrders, { data: orders }] = useLazyFetchOrdersQuery({});

    const onSubmitHandler: React.FormEventHandler<
        HTMLFormElement & SearchFields
    > = event => {
        event.preventDefault();

        const formData = event.currentTarget;
        const { email, phone } = formData;

        getOrders({ email: email.value, phone: phone.value });
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
