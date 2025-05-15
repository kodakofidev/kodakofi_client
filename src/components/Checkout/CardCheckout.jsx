import React from "react";
import Coffee from "../../assets/iconCheckoutPage/Coffee.jpg";
import XCircle from "../../assets/iconCheckoutPage/XCircle.svg";

export default function CardCheckout({
  product,
  quantity,
  size,
  variant,
  typeOrder,
  originalPrice,
  discountPrice,
}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 items-center relative p-4 bg-gray-100 rounded-sm">
        <div className="aspect-square overflow-hidden max-h-[150px]">
          <img src={Coffee} alt="image" className="-translate-y-10" />
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <div className="px-2 py-1 bg-red-600 rounded-2xl w-max">
            <p className="text-white font-semibold">FLASH SALE</p>
          </div>
          <h1 className="text-lg font-semibold">{product}</h1>
          <div>
            <p>
              {quantity} pcs | {size} | {variant} | {typeOrder}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-red-500 line-through">IDR {originalPrice}</p>
            <p className="text-orange text-lg font-semibold">
              IDR {discountPrice}
            </p>
          </div>
        </div>
        <div className="absolute top-3 right-3 cursor-pointer">
          <img src={XCircle} alt="icon" />
        </div>
      </div>
    </>
  );
}
