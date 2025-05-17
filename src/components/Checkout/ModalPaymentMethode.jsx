import React from "react";
import RadioPaymentMethode from "../../components/Checkout/RadioPaymentMethode";
import BCA from "../../assets/iconCheckoutPage/BCA.svg";
import BRI from "../../assets/iconCheckoutPage/BRI.svg";
import Dana from "../../assets/iconCheckoutPage/Dana.svg";
import Gopay from "../../assets/iconCheckoutPage/Gopay.svg";
import Ovo from "../../assets/iconCheckoutPage/Ovo.svg";
import Paypal from "../../assets/iconCheckoutPage/Paypal.svg";

export default function ModalPaymentMethode({
  paymentMethodeModal,
  setPaymentMethodeModal,
  validationPaymentMethode,
}) {
  return (
    <>
      <div
        className={`${
          paymentMethodeModal ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 shadow-lg`}
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30 w-full h-full"></div>
        <div className="px-5 py-4 bg-[#fff] shadow-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg">
          <h1 className="text-sm text-center font-semibold pb-5 md:text-xl">
            Please choose your payment method
          </h1>
          <p
            className={`${
              !validationPaymentMethode ? "block" : "hidden"
            } block text-sm text-red-600 -translate-y-4 italic`}
          >
            Payment methode cannot be empty
          </p>
          <div className="grid grid-cols-2 min-[540px]:grid-cols-3 gap-4 place-items-center items-center md:gap-8">
            <RadioPaymentMethode
              id="bri"
              name="paymentMethode"
              value="BRI"
              image={BRI}
            />
            <RadioPaymentMethode
              id="dana"
              name="paymentMethode"
              value="DANA"
              image={Dana}
            />
            <RadioPaymentMethode
              id="gopay"
              name="paymentMethode"
              value="GoPay"
              image={Gopay}
            />
            <RadioPaymentMethode
              id="bca"
              name="paymentMethode"
              value="BCA"
              image={BCA}
            />
            <RadioPaymentMethode
              id="ovo"
              name="paymentMethode"
              value="OVO"
              image={Ovo}
            />
            <RadioPaymentMethode
              id="paypal"
              name="paymentMethode"
              value="Paypal"
              image={Paypal}
            />
          </div>
          <div className="flex gap-3 justify-center items-center pt-5 md:pt-8">
            <button
              onClick={() => {
                setPaymentMethodeModal(false);
              }}
              type="button"
              className="px-2 py-1 text-red-600 font-semibold rounded-sm cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setPaymentMethodeModal(false);
              }}
              type="submit"
              className="px-2 py-1 bg-orange text-[#fff] font-semibold rounded-sm cursor-pointer hover:scale-[1.03] active:scale-[1] transition text-nowrap"
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
