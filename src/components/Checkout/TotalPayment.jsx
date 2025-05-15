import React from "react";
import BCA from "../../assets/iconCheckoutPage/BCA.svg";
import BRI from "../../assets/iconCheckoutPage/BRI.svg";
import Dana from "../../assets/iconCheckoutPage/Dana.svg";
import Gopay from "../../assets/iconCheckoutPage/Gopay.svg";
import Ovo from "../../assets/iconCheckoutPage/Ovo.svg";
import Paypal from "../../assets/iconCheckoutPage/Paypal.svg";

export default function TotalPayment() {
  return (
    <>
      <div className="py-4 md:col-start-3 md:row-start-1">
        <h1 className="text-xl font-semibold pb-5">Total</h1>
        <div className="grid grid-cols-2 gap-1">
          <h1 className="font-semibold">Order</h1>
          <p className="place-self-end font-semibold">Idr. 40.000</p>
          <h1>Delivery</h1>
          <p className="place-self-end font-semibold">Idr. 0</p>
          <h1 className="font-semibold">Tax</h1>
          <p className="place-self-end font-semibold pb-5">Idr. 4000</p>
          <h1 className="font-semibold">Sub Total</h1>
          <p className="place-self-end font-semibold pb-2">Idr.44.000</p>
          <button
            type="submit"
            className="col-span-2 bg-orange py-1 rounded-sm hover:scale-[1.01] active:scale-[1] cursor-pointer select-none font-medium"
          >
            Checkout
          </button>
          <p className="col-span-2 py-2 text-gray-500">We Accept</p>
          <div className="col-span-2 flex justify-between flex-wrap pb-2">
            <img src={BRI} alt="icon" />
            <img src={Dana} alt="icon" />
            <img src={BCA} alt="icon" />
            <img src={Gopay} alt="icon" />
            <img src={Ovo} alt="icon" />
            <img src={Paypal} alt="icon" />
          </div>
          <p className="col-span-2 text-gray-500">
            *Get Discount if you pay with Bank Central Asia
          </p>
        </div>
      </div>
    </>
  );
}
