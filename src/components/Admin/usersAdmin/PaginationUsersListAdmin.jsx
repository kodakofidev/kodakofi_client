import React from 'react'

export default function PaginationUsersListAdmin({id, setPage, checked, setChecked}) {
    let check = false;
    checked === id ? check = true : check = false;
  return (
    <>
    <div>
        <input
          type="radio"
          name="name"
          id={id}
          className="peer"
          checked={check}
          onChange={() => {
            setPage(id);
            setChecked(id);
          }}
          hidden
        />
        <label
          htmlFor={id}
          className="block text-center peer-checked:text-orange peer-checked:font-bold cursor-pointer hover:scale-[1.03] active:scale-[1] transition"
        >
          {id}
        </label>
      </div>
    </>
  )
}
