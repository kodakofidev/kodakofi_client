import React from 'react'

export default function InputProductAdmin({label, id, type, name, placeholder}) {
  return (
    <>
        <div className='flex gap-2 flex-col pt-4'>
            <label htmlFor={id}>{label}</label>
               <input type={type} name={name} id={id} className='border rounded-md border-gray-400 py-1 px-2 focus:outline-orange' placeholder={placeholder} />
        </div>
    </>
  )
}
