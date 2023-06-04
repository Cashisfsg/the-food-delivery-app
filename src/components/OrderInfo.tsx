import { useReducer } from "react";
import { Order } from "store";

import { Table } from "components";

interface OrderInfoProps {
    order: Order;
    index: number;
}

export const OrderInfo: React.FC<OrderInfoProps> = ({ order, index }) => {
    const [isOpened, setIsOpened] = useReducer(state => !state, false);

    return (
        <details open={isOpened}>
            <summary
                onClick={event => event.preventDefault()}
                className="grid w-full list-none grid-cols-[max-content_1fr_max-content_max-content] items-center gap-8 rounded border-2 px-4 py-2.5 text-lg font-medium shadow"
            >
                <span>{index}.</span>
                <span>
                    {new Date(order.timestamp as string).toLocaleDateString()}
                </span>
                <span>{order.cart.totalCost} $</span>
                <button
                    onClick={setIsOpened}
                    className="inline-block rounded bg-blue-500 px-7 py-2.5 text-base uppercase leading-normal tracking-wide text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:pointer-events-none disabled:bg-blue-200 "
                >
                    {isOpened ? "Hide" : "More"}
                </button>
            </summary>
            <Table order={order} />
        </details>
    );
};
