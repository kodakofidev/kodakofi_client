import React from "react";

export default function RadioStatusOrder({ name, id, value }) {
  return (
    <>
      <div>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          className="peer hidden"
        />
        <label
          htmlFor={id}
          className="block py-1 w-full bg-gray-200 rounded-md peer-checked:bg-[#fff] cursor-pointer"
        >
          <h1 className="text-sm text-center">{value}</h1>
        </label>
      </div>
    </>
  );
}
