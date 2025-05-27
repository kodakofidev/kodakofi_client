import React from "react";
import RadioPaymentMethode from "../../components/Checkout/RadioPaymentMethode";
import BCA from "../../assets/iconCheckoutPage/BCA.svg";
import BRI from "../../assets/iconCheckoutPage/BRI.svg";
import Dana from "../../assets/iconCheckoutPage/Dana.svg";
import Gopay from "../../assets/iconCheckoutPage/Gopay.svg";
import Ovo from "../../assets/iconCheckoutPage/Ovo.svg";
import Paypal from "../../assets/iconCheckoutPage/Paypal.svg";
import QRIS from "../../assets/iconCheckoutPage/QRIS.svg";

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
        } fixed top-0 right-0 bottom-0 left-0 shadow-lg`}
      >
        <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#fff] px-5 py-4 shadow-lg">
          <h1 className="pb-5 text-center text-sm font-semibold md:text-xl">
            Please choose your payment method
          </h1>
          <p
            className={`${
              validationPaymentMethode >= 2 ? "block" : "hidden"
            } block -translate-y-4 text-sm text-red-600 italic`}
          >
            Payment methode cannot be empty
          </p>
          <div className="grid grid-cols-2 place-items-center items-center gap-4 min-[540px]:grid-cols-3 md:gap-8">
            <RadioPaymentMethode
              id="bri"
              name="paymentMethode"
              value="1"
              image={BRI}
            />
            <RadioPaymentMethode
              id="dana"
              name="paymentMethode"
              value="2"
              image={Dana}
            />
            <RadioPaymentMethode
              id="bca"
              name="paymentMethode"
              value="3"
              image={BCA}
            />
            <RadioPaymentMethode
              id="gopay"
              name="paymentMethode"
              value="4"
              image={Gopay}
            />
            <RadioPaymentMethode
              id="ovo"
              name="paymentMethode"
              value="5"
              image={Ovo}
            />
            <RadioPaymentMethode
              id="qris"
              name="paymentMethode"
              value="6"
              image={QRIS}
            />
          </div>
          <div className="flex items-center justify-center gap-3 pt-5 md:pt-8">
            <button
              onClick={() => {
                setPaymentMethodeModal(false);
              }}
              type="button"
              className="cursor-pointer rounded-sm px-2 py-1 font-semibold text-red-600"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setPaymentMethodeModal(false);
              }}
              type="submit"
              className="bg-orange cursor-pointer rounded-sm px-2 py-1 font-semibold text-nowrap text-[#fff] transition hover:scale-[1.03] active:scale-[1]"
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
