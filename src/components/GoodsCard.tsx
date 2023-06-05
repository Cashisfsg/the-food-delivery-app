import React from "react";
import { useAppDispatch, orderActions } from "store";
import { Good } from "store";

interface GoodsCardProps {
    good: Good;
    setFilteredID: React.Dispatch<React.SetStateAction<number | null>>;
}

export const GoodsCard: React.FC<GoodsCardProps> = ({
    good,
    setFilteredID
}) => {
    const dispatch = useAppDispatch();

    const addToCart = (good: Good) => {
        dispatch(orderActions.addToCart(good));
        setFilteredID(good.shop_id);
    };

    return (
        <article className="flex w-full flex-col gap-4 rounded border p-4 shadow-md">
            <img
                src={good?.url}
                alt={good?.name}
                loading="lazy"
                className="aspect-video w-full rounded-lg object-cover shadow-lg transition-transform delay-300 hover:scale-110"
            />
            <div className="flex w-full items-center justify-between gap-4 text-xl font-semibold capitalize">
                <h3 className="w-max overflow-hidden text-ellipsis whitespace-nowrap">
                    {good?.name}
                </h3>
                <span className="whitespace-nowrap">{good?.price} $</span>
            </div>

            <button
                onClick={() => {
                    addToCart(good);
                }}
                className="inline-block rounded bg-blue-500 px-7 py-2.5 text-base uppercase leading-normal tracking-wide text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
            >
                Add to cart
            </button>
        </article>
    );
};
