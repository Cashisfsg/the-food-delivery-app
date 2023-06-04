import { Address } from "components";

export const OrderDetails: React.FC = () => {
    return (
        <fieldset className="row-span-2 flex flex-col justify-between rounded-md border-2 px-8 py-4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1685630638966!5m2!1sru!2sua"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-video w-full rounded-md"
            ></iframe>
            <label>
                Address
                <Address />
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border-2 px-4 py-2 outline-none"
                />
            </label>
            <label>
                Phone
                <input
                    type="tel"
                    name="phone"
                    pattern={"(?:+38)?d{10}"}
                    required
                    className="w-full rounded-md border-2 px-4 py-2 outline-none"
                />
            </label>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    minLength={3}
                    maxLength={50}
                    pattern="[A-Za-zА-Яа-я\s]+"
                    required
                    className="w-full rounded-md border-2 px-4 py-2 outline-none"
                />
            </label>
        </fieldset>
    );
};
