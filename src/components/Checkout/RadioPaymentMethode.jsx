import React from "react";

export default function RadioPaymentMethode({ name, id, value, image }) {
  return (
    <>
      <div className="flex w-16 h-10 justify-center items-center md:scale-[1.30]">
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          className="peer hidden"
        />
        <label
          htmlFor={id}
          className="flex justify-center items-center py-1 h-full w-full border border-gray-400 rounded-md peer-checked:border-orange cursor-pointer md:w-[160px]"
        >
          <img src={image} alt="payment" />
        </label>
      </div>
    </>
  );
}
