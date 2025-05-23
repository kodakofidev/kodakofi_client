import React from "react";

export default function RadioCheckout({
  name,
  id,
  value,
  label,
  deliveryCostHandler,
  setDelivery
}) {
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            deliveryCostHandler(e);
            setDelivery(label);
          }}
          type="radio"
          name={name}
          id={id}
          value={value}
          className="peer hidden"
        />
        <label
          htmlFor={id}
          className="block py-1 px-3 w-[115px] border-2 border-slate-400 rounded-md peer-checked:border-orange cursor-pointer md:w-[160px]"
        >
          <h1 className="text-sm text-center">{label}</h1>
        </label>
      </div>
    </>
  );
}
