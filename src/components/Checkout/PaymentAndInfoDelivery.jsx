import React from "react";
import InputCheckout from "./InputCheckout";
import Mail from "../../assets/iconCheckoutPage/Mail.svg";
import Profile from "../../assets/iconCheckoutPage/Profile.svg";
import Location from "../../assets/iconCheckoutPage/Location.svg";
import RadioCheckout from "../../components/Checkout/RadioCheckout";

export default function PaymentAndInfoDelivery({
  setDeliveryCost,
  validationEmail,
  validationFullName,
  validationAddress,
  validationDelivery,
}) {
  function deliveryCostHandler(e) {
    if (e.target.value === "Door Delivery") {
      setDeliveryCost(15000);
    } else if (e.target.value === "Pick Up") {
      setDeliveryCost(0);
    } else {
      setDeliveryCost(0);
    }
  }

  return (
    <>
      <div className="py-8 md:col-span-4">
        <h1 className="flex text-2xl pb-4">Payment & Info Delivery</h1>
        <div className="flex flex-col">
          <InputCheckout
            icon={Mail}
            id={"email"}
            label={"Email"}
            name={"email"}
            placeHolder={"Enter Your Email"}
            type={"email"}
          />
          <p
            className={`${
              !validationEmail ? "block" : "hidden"
            } text-sm text-red-600 italic`}
          >
            Email cannot be empty
          </p>
          <InputCheckout
            icon={Profile}
            id={"fullName"}
            label={"Full Name"}
            name={"fullName"}
            placeHolder={"Enter Your Full Name"}
            type={"text"}
          />
          <p
            className={`${
              !validationFullName ? "block" : "hidden"
            } text-sm text-red-600 italic`}
          >
            Fullname cannot be empty
          </p>
          <InputCheckout
            icon={Location}
            id={"address"}
            label={"Address"}
            name={"address"}
            placeHolder={"Enter Your Address"}
            type={"text"}
          />
          <p
            className={`${
              !validationAddress ? "block" : "hidden"
            } text-sm text-red-600 italic`}
          >
            Address cannot be empty
          </p>
          <h1 className="text-sm font-semibold py-3">Delivery</h1>
          <div className="flex justify-between gap-x-1 gap-y-4 flex-wrap">
            <RadioCheckout
              id={"dine in"}
              label={"Dine In"}
              name={"delivery"}
              value={"Dine In"}
              deliveryCostHandler={deliveryCostHandler}
            />
            <RadioCheckout
              id={"door delivery"}
              label={"Door Delivery"}
              name={"delivery"}
              value={"Door Delivery"}
              deliveryCostHandler={deliveryCostHandler}
            />
            <RadioCheckout
              id={"pick up"}
              label={"Pick Up"}
              name={"delivery"}
              value={"Pick Up"}
              deliveryCostHandler={deliveryCostHandler}
            />
          </div>
          <p
            className={`${
              !validationDelivery ? "block" : "hidden"
            } text-sm text-red-600 italic`}
          >
            Delivery cannot be empty
          </p>
        </div>
      </div>
    </>
  );
}
