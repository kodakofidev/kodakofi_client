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
  setDataOrder,
}) {
  const totalOrder = productList.reduce((total, item) => {
    return total + item.discountPrice;
  }, 0);

  const tax = (totalOrder * 10) / 100;

  const dataPayment = {
    totalOrder,
    tax,
    deliveryCost,
    subTotal: totalOrder + deliveryCost + tax,
  };

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

  useEffect(() => {
    setDataOrder({ ...dataPayment });
  }, [totalOrder, tax, deliveryCost]);

  return (
    <>
      <div className="py-4 md:pl-8 md:col-start-5 md:row-start-1 md:col-span-3">
        <h1 className="text-xl font-semibold pb-4 md:pb-8">Total</h1>
        <div className="grid grid-cols-2 gap-1 bg-gray-100 rounded-sm p-4">
          <h1 className="font-semibold">Order</h1>
          <p className="place-self-end font-semibold">
            Idr. {totalOrderFormat}
          </p>
          <h1>Delivery</h1>
          <p className="place-self-end font-semibold">
            Idr. {deliveryCostFormat}
          </p>
          <h1 className="font-semibold">Tax</h1>
          <p className="place-self-end font-semibold pb-5">Idr. {taxFormat}</p>
          <h1 className="font-semibold">Sub Total</h1>
          <p className="place-self-end font-semibold pb-2">
            Idr {subTotalFormat}
          </p>
          <button
            type="submit"
            className="col-span-2 bg-orange py-1 rounded-sm hover:scale-[1.01] active:scale-[1] cursor-pointer select-none font-medium"
          >
            Checkout
          </button>
          <p className="col-span-2 py-2 text-gray-500">We Accept</p>
          <div className="col-span-2 grid grid-cols-6 items-center">
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
