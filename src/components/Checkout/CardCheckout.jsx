import React from "react";
import Coffee from "../../assets/iconCheckoutPage/Coffee.jpg";
import XCircle from "../../assets/iconCheckoutPage/XCircle.svg";
import { useDispatch } from "react-redux";
import { editProduct } from "../../redux/slices/orderSlice";

export default function CardCheckout({
  product,
  quantity,
  size,
  variant,
  // typeOrder,
  size_id,
  originalPrice,
  discountPrice,
  id,
  productList,
  setProductList,
}) {
  const dispatch = useDispatch();
  function deleteProductOrder(id, size_id) {
    // const filterProduct = productList.filter((product) => product.id !== id);
    // setProductList(filterProduct);
    console.log(id, size_id);
    dispatch(editProduct(id, size_id));
  }
  return (
    <>
      <div className="relative grid grid-cols-3 items-center gap-3 rounded-sm bg-gray-100 p-4 md:grid-cols-4 md:p-0">
        <div className="flex justify-start">
          <div className="flex aspect-square h-full max-h-[110px] items-center justify-center overflow-hidden max-[1000px]:max-h-[110px] md:max-h-[140px]">
            <img src={Coffee} alt="image" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-1">
          <div className="w-max rounded-2xl bg-red-600 px-2 py-1">
            <p className="text-[10px]md:text-sm font-semibold text-white max-[1000px]:text-[10px]">
              FLASH SALE
            </p>
          </div>
          <h1 className="text-smmd:text-[17px] font-semibold max-[1000px]:text-sm">
            {product}
          </h1>
          <div>
            <p className="text-smmd:text-[17px] max-[1000px]:text-sm">
              {quantity} pcs | {size} | {variant} | typeOrder
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[13px]md:text-[15px] text-red-500 line-through max-[1000px]:text-[13px]">
              IDR {originalPrice}
            </p>
            <p className="text-orange text-[15px]md:text-[18px] font-semibold max-[1000px]:text-[15px]">
              IDR {discountPrice}
            </p>
          </div>
        </div>
        <div
          className="absolute top-3 right-3 cursor-pointer md:top-1/2 md:right-4 md:-translate-y-1/2"
          onClick={() => {
            deleteProductOrder(id);
          }}
        >
          <img src={XCircle} alt="icon" className="scale-[0.97]" />
        </div>
      </div>
    </>
  );
}
