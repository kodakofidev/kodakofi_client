import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addOrder } from "../redux/slices/orderSlice";
import thumbs from "../assets/icon/ThumbsUp.svg";
import Cart from "../assets/icon/ShoppingCart.svg";
import image from "../assets/icon/default-image.jpg";
import constants from "../configs/constant";
import close from "../assets/icon/close-x.svg"

function Card({ product }) {
  const URL = import.meta.env.VITE_API_URL
  const [isOpen, setIsOpen] = useState(false)
  const [order, setOrder] = useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    if (!product.toping) {
          product.toping = ["Hot", "Ice"];
        }
  })

  const nextPage = () => {
    navigate(`/product/${product.id}`);
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  
  const addToCart = () => {
    setIsOpen(true)
  }

  const addToOrder = () => {
    dispatch(addOrder(order))
    setIsOpen(false)
  }

  return (
    <div className="relative top-8 max-h-[360px] max-w-[377px] min-w-[158px] snap-center transition duration-150 ease-linear hover:scale-105">
      <img
        src={`${constants.productUrl}${product?.images?.[0] || image}`}
        alt={product?.name || "image"}
        className="h-[215px] w-full object-cover sm:h-[240px] lg:h-[360px]"
      />
      {product?.discount ? (
        <>
          <div className="font-lg absolute top-[10px] left-[10px] rounded-full bg-[#D00000] p-[10px] px-3 py-2 text-center font-bold text-white max-sm:text-[12px]">
            {product.discount_name}
          </div>
        </>
      ) : (
        <>
          <div className="hidden"></div>
        </>
      )}
      <div className="relative -top-16 flex flex-col justify-center px-1 sm:px-2">
        <div className="flex flex-col gap-[10px] bg-[#fff] p-3 max-sm:p-2 md:p-[10px]">
          <div
            className="text-lg leading-[100%] font-medium text-black md:h-7 md:text-2xl lg:h-10"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product?.name || "Product Name"}
          </div>
          <div
            className="sm:text-md text-[#4F5665] max-sm:text-[12px]"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product?.description || "Product Description"}
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <img src={thumbs} alt="rating" width={16} height={16} />
            <p className="sm:text-md text-sm leading-[100%] text-gray-600">
              {product?.total_ratings || 0} users recommend this product
            </p>
          </div>
          <div className="flex flex-row items-center gap-[10px] text-lg font-medium text-[#FF8906] sm:text-2xl">
            {product?.discount ? (
              <>
                <p className="text-xs text-[#D00000] line-through">
                  IDR {product.price.toLocaleString("id-ID")}
                </p>
                <p className="text-md leading-[100%] font-medium tracking-normal text-[#FF8906]">
                  IDR{" "}
                  {(
                    product.price -
                    product.price * product.discount
                  ).toLocaleString("id-ID")}
                </p>
              </>
            ) : (
              <span className="text-md leading-[100%] font-medium tracking-normal text-[#FF8906]">
                IDR {product?.price.toLocaleString("id-ID")}
              </span>
            )}
          </div>
          <div className="flex flex-row gap-[10px] max-sm:flex-col">
            <button
              onClick={nextPage}
              className="w-3/4 cursor-pointer rounded-md bg-[#FF8906] py-2 max-sm:w-full"
            >
              Buy
            </button>
            <button onClick={addToCart} className="flex w-1/3 cursor-pointer flex-col items-center justify-center rounded-md border border-[#FF8906] p-2 max-sm:w-full">
              <img src={Cart} alt="Add to cart" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
      {product?.category_id < 3 ? (
      <div className={`${isOpen ? "visible" : "invisible"} fixed inset-0 mt-8 bg-[#000000cc] flex items-center justify-center transition-all duration-300 ease-in-out`}>
        <div className="relative rounded-lg bg-[#e8e8e8] p-5">
            <>
              <div className="border-b border-[#ff8906] h-5">
                <img onClick={closeModal} src={close} alt="Close" className="absolute right-4 lg:right-4 top-4 lg:top-3 w-5 lg:w-7 h-5 lg:h-7 cursor-pointer"/>
              </div>
              <h3 className="mt-4 md:mb-2 text-lg md:text-md font-bold text-[#0B0909]">
                Choose Size
              </h3>
              {product.category_id < 3 ? (
                <div className="mb-4 flex w-full flex-wrap gap-2">
                  {product?.sizes?.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        setOrder((prev) => ({
                          ...prev,
                          size: item.size,
                          size_id: item.id,
                        }))
                      }
                      className={`${
                        order?.size === item.size
                          ? "border border-(--secondary-color) bg-(--secondary-color) font-semibold text-[#0B0909] md:text-sm rounded-md p-1 lg:p-2"
                          : "border border-(--secondary-color) font-medium text-[#4F5665] md:text-sm rounded-md p-1 lg:p-2"
                      } flex-1 cursor-pointer p-[10px] hover:bg-(--secondary-color) hover:text-[#0B0909] md:text-sm rounded-md p-1 lg:p-2`}
                    >
                      {item.size}
                    </button>
                  ))}
                </div>
              ) : (
                <></>
              )}

              <div>
                <h3 className="mt-4 md:mb-2 text-lg md:text-md font-bold text-[#0B0909]">
                  Hot/Ice?
                </h3>
                <div className="mb-10 flex w-full flex-wrap gap-2 lg:mb-24">
                  {product?.toping?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setOrder((prev) => ({
                          ...prev,
                          toping: item,
                          is_iced: item === "Ice" ? true : false,
                        }))
                      }
                      className={`${
                        order?.toping === item
                          ? "border border-(--secondary-color) bg-(--secondary-color) font-semibold text-[#0B0909] md:text-sm rounded-md p-1 lg:p-2"
                          : "border border-(--secondary-color) font-medium text-[#4F5665] md:text-sm rounded-md p-1 lg:p-2"
                      } flex-1 cursor-pointer p-[10px] hover:bg-(--secondary-color) hover:font-semibold hover:text-[#0B0909] md:text-sm rounded-md p-1 lg:p-2`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={addToOrder}
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md border border-[#FF8906] p-2 max-sm:w-full">
                  <div className="flex flex-row justify-between md:gap-[15px] lg:gap-[10px]">
                    <p className="md:text-sm"> Add to cart </p>
                    <img src={Cart} alt="Add to order" width={24} height={24} />
                  </div>
              </button>
            </>
        </div>
      </div>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default Card;
