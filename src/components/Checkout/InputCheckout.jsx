import React from "react";

export default function InputCheckout({
  icon,
  label,
  type,
  name,
  id,
  placeHolder,
}) {
  return (
    <>
      <div className="flex flex-col gap-1 pt-3">
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
        </label>
        <div className="flex relative">
          <img
            src={icon}
            alt="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 scale-[1.2]"
          />
          <input
            type={type}
            name={name}
            id={id}
            className="border-gray-300 rounded-lg border-2 p-2 w-full pl-10 focus:outline-orange"
            placeholder={placeHolder}
          />
        </div>
      </div>
    </>
  );
}
