import React from "react";
import Plus from "../../assets/iconCheckoutPage/plus.svg";
import CardCheckout from "./CardCheckout";

export default function OrderListComponent() {
  return (
    <>
      <div className="md:col-span-2">
        <div className="flex justify-between items-center pt-2 pb-4">
          <h1 className="flex text-2xl">Your Order</h1>
          <button
            type="button"
            className="flex justify-baseline bg-orange w-24 px-1 py-2 rounded-md cursor-pointer hover:scale-[1.03] active:scale-[1]"
          >
            <img src={Plus} alt="icon" className="scale-[0.6]" />
            <p className="text-sm font-medium">Add Menu</p>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <CardCheckout
            product={"Hazelnut Latte"}
            quantity={2}
            size={"Regular"}
            variant={"Ice"}
            typeOrder={"Dine In"}
            discountPrice={40000}
            originalPrice={20000}
          />
          <CardCheckout
            product={"Hazelnut Latte"}
            quantity={2}
            size={"Regular"}
            variant={"Ice"}
            typeOrder={"Dine In"}
            discountPrice={40000}
            originalPrice={20000}
          />
          <CardCheckout
            product={"Hazelnut Latte"}
            quantity={2}
            size={"Regular"}
            variant={"Ice"}
            typeOrder={"Dine In"}
            discountPrice={40000}
            originalPrice={20000}
          />
        </div>
      </div>
    </>
  );
}
