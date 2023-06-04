interface SearchOrdersProps {
    onSubmitHandler: React.FormEventHandler<HTMLFormElement>;
}

export const SearchOrders: React.FC<SearchOrdersProps> = ({
    onSubmitHandler
}) => {
    return (
        <form
            onSubmit={onSubmitHandler}
            className="grid place-items-center gap-4"
        >
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    autoFocus={true}
                    required
                    className="w-full rounded-md border-2 px-4 py-2 outline-none"
                />
            </label>
            <label>
                Phone
                <input
                    type="tel"
                    name="phone"
                    pattern={"^(?:+38)?d{10}$"}
                    required
                    className="w-full rounded-md border-2 px-4 py-2 outline-none"
                />
            </label>
            <button
                type="submit"
                className="inline-block rounded bg-blue-500 px-7 py-2.5 text-base uppercase leading-normal tracking-wide text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:pointer-events-none disabled:bg-blue-200 "
            >
                Search
            </button>
        </form>
    );
};
