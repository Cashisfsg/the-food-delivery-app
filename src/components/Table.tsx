import { Order } from "store";

interface TableProps {
    order: Order;
}

export const Table: React.FC<TableProps> = ({ order }) => {
    return (
        <table className="w-full overflow-hidden rounded">
            <thead className="border-b-4 border-double bg-gray-700 text-xl uppercase text-gray-400">
                <tr>
                    <th
                        scope="col"
                        className="w-1/12 px-2.5 py-1.5"
                    >
                        #
                    </th>
                    <th
                        scope="col"
                        className="px-2.5 py-1.5"
                    >
                        Name
                    </th>
                    <th
                        scope="col"
                        className="w-2/12 px-2.5 py-1.5"
                    >
                        Price
                    </th>
                    <th
                        scope="col"
                        className="w-2/12 px-2.5 py-1.5"
                    >
                        Amount
                    </th>
                    <th
                        scope="col"
                        className="w-2/12 px-2.5 py-1.5"
                    >
                        Cost
                    </th>
                </tr>
            </thead>
            <tbody>
                {order.cart.goods.map((cartItem, index) => (
                    <tr
                        key={cartItem.id}
                        className={
                            index % 2
                                ? "border-b border-gray-700 bg-gray-900 text-center text-lg font-medium text-white"
                                : "border-b border-gray-700 bg-gray-800 text-center text-lg font-medium text-white"
                        }
                    >
                        <td className="px-2.5 py-1">{index + 1}</td>
                        <td className="px-2.5 py-1 capitalize">
                            {cartItem.name}
                        </td>
                        <td className="px-2.5 py-1">{cartItem.price} $</td>
                        <td className="px-2.5 py-1">{cartItem.amount}</td>
                        <td className="px-2.5 py-1">
                            {cartItem.price * cartItem.amount}
                            &nbsp; $
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="border-t-4 border-double bg-gray-700 font-medium uppercase text-white">
                    <td colSpan={3}></td>
                    <td className="px-2.5 py-1.5 text-center">Total cost</td>
                    <td className="px-2.5 py-1.5 text-center">
                        {order.cart.totalCost} $
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};
