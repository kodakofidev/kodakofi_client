import React from "react";
import InputCheckout from "./InputCheckout";
import Mail from "../../assets/iconCheckoutPage/Mail.svg";
import Profile from "../../assets/iconCheckoutPage/Profile.svg";
import Location from "../../assets/iconCheckoutPage/Location.svg";
import RadioCheckout from "../../components/Checkout/RadioCheckout";

export default function PaymentAndInfoDelivery() {
  return (
    <>
      <div className="py-8 md:col-span-4">
        <h1 className="flex text-2xl pb-4">Payment & Info Delivery</h1>
        <div className="flex flex-col gap-4">
          <InputCheckout
            icon={Mail}
            id={"email"}
            label={"Email"}
            name={"email"}
            placeHolder={"Enter Your Email"}
            type={"email"}
          />
          <InputCheckout
            icon={Profile}
            id={"fullName"}
            label={"Full Name"}
            name={"fullName"}
            placeHolder={"Enter Your Full Name"}
            type={"text"}
          />
          <InputCheckout
            icon={Location}
            id={"address"}
            label={"Address"}
            name={"address"}
            placeHolder={"Enter Your Address"}
            type={"text"}
          />
          <h1 className="text-sm font-semibold">Delivery</h1>
          <div className="flex justify-between gap-x-1 gap-y-4 flex-wrap">
            <RadioCheckout
              id={"dine in"}
              label={"Dine In"}
              name={"delivery"}
              value={"Dine In"}
            />
            <RadioCheckout
              id={"door delivery"}
              label={"Door Delivery"}
              name={"delivery"}
              value={"Door Delivery"}
            />
            <RadioCheckout
              id={"pick up"}
              label={"Pick Up"}
              name={"delivery"}
              value={"Pick Up"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
