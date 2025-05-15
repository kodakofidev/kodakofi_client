import React from "react";
import OrderListComponent from "../components/Checkout/OrderListComponent";
import PaymentAndInfoDelivery from "../components/Checkout/PaymentAndInfoDelivery";
import TotalPayment from "../components/Checkout/TotalPayment";

export default function CheckoutPage() {
  return (
    <>
      <section className="px-4 lg:px-8 md:px-12 xl:px-24 pt-[80px]">
        <h1 className="text-3xl">Payment Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <OrderListComponent />
          <PaymentAndInfoDelivery />
          <TotalPayment />
        </div>
      </section>
    </>
  );
}
