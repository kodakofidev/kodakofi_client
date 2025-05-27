import React from 'react';

export default function InputProductAdmin({ id, label, name, placeholder, type, value, onChange }) {
  return (
    <div className='flex flex-col gap-y-2 pt-4'>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <input 
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='block w-full rounded-md border border-gray-300 shadow-sm focus:border-orange focus:ring focus:ring-orange focus:ring-opacity-50 py-2 px-3'
        value={value}
        onChange={onChange}
        // Add min attribute for number inputs to prevent negative values
        {...(type === 'number' ? { min: "0" } : {})}
      />
    </div>
  );
}
