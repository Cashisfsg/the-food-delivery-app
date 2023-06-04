import React from "react";
import { usePlacesWidget } from "react-google-autocomplete";

export const Address: React.FC = () => {
    const { ref: inputRef } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        options: {
            componentRestrictions: {
                country: "ua"
            },
            types: ["address"],
            fields: ["formatted_address", "name"],
            googleLogo: false
        }
    });

    return (
        <input
            type="text"
            name="address"
            autoFocus={true}
            minLength={3}
            maxLength={50}
            required
            // @ts-ignore
            ref={inputRef}
            className="w-full rounded-md border-2 px-4 py-2 outline-none"
        />
    );
};
