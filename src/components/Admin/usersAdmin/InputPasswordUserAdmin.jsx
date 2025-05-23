import React from 'react'

export default function InputPasswordUserAdmin({label, id, type, name, placeholder}) {
  return (
    <>  
        <div className='flex gap-2 flex-col pt-4'>
            <div className='flex justify-between'>
              <label htmlFor={id}>{label}</label>
              <a href="#" className='text-orange hover:underline'>Set New Password</a>
            </div>
            <input type={type} name={name} id={id} className='border rounded-md border-gray-400 py-1 px-2 focus:outline-orange' placeholder={placeholder} />
        </div>
    </>
  )
}
