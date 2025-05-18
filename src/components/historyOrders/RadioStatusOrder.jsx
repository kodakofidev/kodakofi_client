import React, { useEffect, useState } from "react";

export default function RadioStatusOrder({
  name,
  id,
  value,
  checkedStatus,
  setCheckedStatus,
}) {
  let checked = false;
  checkedStatus === value ? (checked = true) : (checked = false);
  return (
    <>
      <div>
        <input
          onChange={() => {
            setCheckedStatus(value);
          }}
          type="radio"
          name={name}
          id={id}
          value={value}
          className="peer"
          checked={checked}
          hidden
        />
        <label
          htmlFor={id}
          className="block py-2 w-full bg-gray-100 rounded-md peer-checked:bg-[#fff] cursor-pointer"
        >
          <h1 className="text-sm text-center">{value}</h1>
        </label>
      </div>
    </>
  );
}
