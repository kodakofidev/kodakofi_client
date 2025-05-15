import React from "react";

export default function InputCheckout({ Icon }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <div className="flex relative">
          <img
            src={Icon}
            alt="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 scale-[1.2]"
          />
          <input
            type="text"
            name="email"
            id="email"
            className="border-gray-300 rounded-lg border-2 p-2 w-full pl-10"
            placeholder="Enter Your Email"
          />
        </div>
      </div>
    </>
  );
}
