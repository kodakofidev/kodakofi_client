import React from "react";
import Coffee from "../../../assets/iconCheckoutPage/Coffee.jpg";

export default function CardOrderAdmin({
  product,
  quantity,
  size,
  variant,
  typeOrder,
  originalPrice,
  discountPrice,
  id,
  productList,
  setProductList,
}) {

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 items-center relative p-4 bg-gray-100 rounded-sm md:p-0">
        <div className="flex justify-start">
          <div className="aspect-square overflow-hidden max-h-[110px] max-[1000px]:max-h-[110px] md:max-h-[140px] flex justify-center items-center h-full">
            <img src={Coffee} alt="image" />
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <div className="px-2 py-1 bg-red-600 rounded-2xl w-max">
            <p className="text-white font-semibold text-[10px]md:text-sm max-[1000px]:text-[10px]">
              FLASH SALE
            </p>
          </div>
          <h1 className="font-semibold text-smmd:text-[17px] max-[1000px]:text-sm ">
            {product}
          </h1>
          <div>
            <p className="text-smmd:text-[17px] max-[1000px]:text-sm">
              {quantity} pcs | {size} | {variant} | {typeOrder}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-red-500 line-through text-[13px]md:text-[15px] max-[1000px]:text-[13px] ">
              IDR {originalPrice}
            </p>
            <p className="text-orange font-semibold text-[15px]md:text-[18px] max-[1000px]:text-[15px]">
              IDR {discountPrice}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
