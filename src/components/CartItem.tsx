import React from "react";
import { useAppDispatch, orderActions } from "store";
import { BsTrash } from "react-icons/bs";
import { Good } from "store";

interface CartItemProps {
    key: number;
    cartItem: Good;
}

export const CartItem: React.FC<CartItemProps> = ({ key, cartItem }) => {
    const dispatch = useAppDispatch();

    const onChangeAmount = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        dispatch(
            orderActions.changeAmount({ amount: +event.target.value, id })
        );
    };

    const onDelete = (id: number) => {
        dispatch(orderActions.removeFromCart({ id }));
    };

    return (
        <article
            key={key}
            className="grid h-max grid-cols-[6fr_5fr_1fr] place-items-center gap-4 rounded-md border px-4 pb-8 pt-4 shadow-md"
        >
            <div className="rounded-md border shadow-md">
                <img
                    src={cartItem?.url}
                    alt={cartItem?.name}
                    className="aspect-video w-full object-cover"
                />
            </div>

            <section className="text-center">
                <h3 className="text-lg font-semibold capitalize">
                    {cartItem?.name}
                </h3>
                <p className="mb-auto">
                    <span>Price:</span> {cartItem?.price} $
                </p>
                <input
                    type="number"
                    value={cartItem?.amount}
                    onChange={event => onChangeAmount(event, cartItem.id)}
                    min={1}
                    max={25}
                    required
                    className="w-full rounded border-2 px-4 py-2"
                />
            </section>
            <button
                type="button"
                onClick={() => onDelete(cartItem?.id)}
            >
                <BsTrash className="text-2xl text-red-600" />
            </button>
        </article>
    );
};
