import React from "react";

export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="accent-gray-700 focus:ring-0 text-gray-700"
            onChange={(e) => handleChange(e)}
        />
    );
}
