import React from "react";

export default function PaginationHistoryOrder({
  name,
  id,
  value,
  checked,
  setChecked,
  setPage,
  setMore,
  moreValue,
  key,
}) {
  let check = false;

  checked === value ? (check = true) : (check = false);

  return (
    <>
      <div key={key}>
        <input
          type="radio"
          name={name}
          id={id}
          className="peer"
          checked={check}
          onChange={() => {
            setPage(value);
            setChecked(value);
            setMore(value - moreValue);
          }}
          hidden
        />
        <label
          htmlFor={id}
          className="block w-10 h-10 bg-white leading-10 rounded-full text-center peer-checked:bg-orange cursor-pointer shadow-lg hover:scale-[1.03] active:scale-[1] transition"
        >
          {value}
        </label>
      </div>
    </>
  );
}
