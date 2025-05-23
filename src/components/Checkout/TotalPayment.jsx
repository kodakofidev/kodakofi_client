import React, { useEffect } from "react";
import BCA from "../../assets/iconCheckoutPage/BCA.svg";
import BRI from "../../assets/iconCheckoutPage/BRI.svg";
import Dana from "../../assets/iconCheckoutPage/Dana.svg";
import Gopay from "../../assets/iconCheckoutPage/Gopay.svg";
import Ovo from "../../assets/iconCheckoutPage/Ovo.svg";
import Paypal from "../../assets/iconCheckoutPage/Paypal.svg";

export default function TotalPayment({
  productList,
  deliveryCost,
  setPaymentMethodeModal,
  validationPaymentMethode,
}) {
  const totalOrder = productList.reduce((total, item) => {
    return total + item.pricebefore * item.qty;
  }, 0);

  const tax = (totalOrder * 12) / 100;

  const totalOrderFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(totalOrder);

  const taxFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(tax);

  const deliveryCostFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(deliveryCost);

  const subTotalFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(totalOrder + deliveryCost + tax);

  return (
    <>
      <div className="py-4 md:pl-8 md:col-start-5 md:row-start-1 md:col-span-3 md:row-span-2">
        <h1 className="text-xl font-semibold pb-4 md:pb-5 md:pt-3">Total</h1>
        <div className="grid grid-cols-2 gap-1 bg-gray-100 rounded-sm p-4">
          <h1 className="font-semibold text-[#4F5665]">Order</h1>
          <p className="place-self-end font-semibold">
            Idr. {totalOrderFormat}
          </p>
          <h1 className="font-semibold text-[#4F5665]">Delivery</h1>
          <p className="place-self-end font-semibold">
            Idr. {deliveryCostFormat}
          </p>
          <h1 className="font-semibold text-[#4F5665]">Tax</h1>
          <p className="place-self-end font-semibold pb-5">Idr. {taxFormat}</p>
          <h1 className="font-semibold text-[#4F5665]">Sub Total</h1>
          <p className="place-self-end font-semibold pb-2">
            Idr {subTotalFormat}
          </p>
          <button
            // onClick={() => {
            //   setPaymentMethodeModal(true);
            // }}
            type="submit"
            className="col-span-2 bg-orange py-1 rounded-sm hover:scale-[1.01] active:scale-[1] cursor-pointer select-none font-medium"
          >
            Checkout
          </button>
          <p className="col-span-2 py-2 text-gray-500">We Accept</p>
          <div className="col-span-2 grid grid-cols-6 items-center md:grid-cols-3 place-items-center gap-2 lg:grid-cols-6">
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
