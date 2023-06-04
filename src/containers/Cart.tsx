import { useStateSelector } from "store";
import { CartItem } from "components";
import React from "react";

export const Cart: React.FC = () => {
    const cart = useStateSelector(state => state.order.goods);

    return (
        <fieldset className="grid place-content-start gap-8 overflow-auto rounded-md border-2 px-8 py-4">
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    cartItem={item}
                />
            ))}
        </fieldset>
    );
};
