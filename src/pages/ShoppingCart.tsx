import { useState } from "react";
import { Navigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useAppDispatch, useStateSelector, confirmOrder } from "store";

import { OrderDetails, Cart } from "containers";

interface OrderDetailsFields {
    address: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    name: HTMLInputElement;
}

export const ShoppingCart: React.FC = () => {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const dispatch = useAppDispatch();

    const isCartEmpty = useStateSelector(
        state => state.order.goods.length === 0
    );
    const totalCost = useStateSelector(state => state.order.totalCost);

    const handleCaptchaChange = (token: string | null) => {
        setCaptchaToken(token);
    };

    const handleFormSubmit: React.FormEventHandler<
        HTMLFormElement & OrderDetailsFields
    > = async event => {
        event.preventDefault();

        const formData = event.currentTarget;
        const { name, email, phone, address } = formData;

        await dispatch(
            confirmOrder({
                name: name.value,
                email: email.value,
                phone: phone.value,
                address: address.value
            })
        );
    };

    if (isCartEmpty && captchaToken) {
        return <Navigate to="/" />;
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="grid h-full grid-cols-2 grid-rows-[1fr_max-content] gap-8"
        >
            <OrderDetails />
            <Cart />
            <fieldset className="grid place-items-end gap-4 pb-8">
                {!isCartEmpty && (
                    <ReCAPTCHA
                        sitekey={
                            process.env
                                .REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY as string
                        }
                        onChange={handleCaptchaChange}
                    />
                )}
                <div className="flex w-full items-center justify-between gap-8 text-xl font-medium tracking-wide">
                    <span>Total cost: {totalCost} $</span>
                    <button
                        type="submit"
                        disabled={!!!captchaToken || isCartEmpty}
                        className="inline-block rounded bg-blue-500 px-7 py-2.5 text-base uppercase leading-normal tracking-wide text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:pointer-events-none disabled:bg-blue-200 "
                    >
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
    );
};
