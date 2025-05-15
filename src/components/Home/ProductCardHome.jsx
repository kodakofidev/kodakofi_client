import React from "react";
import Cart from "../../assets/ShoppingCart.svg";
import Thumbnail from "../../assets/iconCheckoutPage/Thumbnail.png";

export default function ProductCardHome() {
  return (
    <>
      <div className="w-max h-max">
        <div className="aspect-square h-[200px] overflow-hidden">
          <img src={Thumbnail} alt="thumbnail" />
        </div>
        <div className="bg-[#fefefe] p-5 w-[180px] -translate-y-14 translate-x-2 flex flex-col gap-2 shadow-lg">
          <h1 className="font-bold text-xl">Hazelnut Latte</h1>
          <p className="text-[12px]">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <h1 className="text-orange font-medium text-lg">IDR 20.000</h1>
          <div className="grid grid-cols-7">
            <button
              type="button"
              className="col-span-4 bg-orange rounded-md cursor-pointer hover:scale-[1.03] active:scale-[1] transition font-medium"
            >
              Buy
            </button>
            <button
              type="button"
              className="col-span-3 justify-self-end border px-2 rounded-md border-orange cursor-pointer hover:scale-[1.03] active:scale-[1] transition"
            >
              <img src={Cart} alt="icon" className="scale-[0.95]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
