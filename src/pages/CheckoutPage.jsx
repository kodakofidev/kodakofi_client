import React from "react";
import Plus from "../assets/iconCheckoutPage/plus.svg";
import CardCheckout from "../components/Checkout/CardCheckout";
import InputCheckout from "../components/Checkout/InputCheckout";
import Mail from "../assets/iconCheckoutPage/Mail.svg";
import Profile from "../assets/iconCheckoutPage/Profile.svg";
import Location from "../assets/iconCheckoutPage/Location.svg";

export default function CheckoutPage() {
  return (
    <>
      <h1 className="text-3xl px-4">Payment Details</h1>
      <div className="grid grid-cols-1">
        <div className="px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="flex text-2xl">Your Order</h1>
            <button
              type="button"
              className="flex justify-baseline bg-orange w-24 px-1 py-2 rounded-md cursor-pointer hover:scale-[1.03] active:scale-[1]"
            >
              <img src={Plus} alt="icon" className="scale-[0.6]" />
              <p className="text-sm">Add Menu</p>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <CardCheckout />
            <CardCheckout />
            <CardCheckout />
          </div>
        </div>
        <div className="px-4">
          <div>
            <h1 className="flex text-2xl">Payment & Info Delivery</h1>
            <InputCheckout Icon={Mail} />
          </div>
        </div>
      </div>
    </>
  );
}
