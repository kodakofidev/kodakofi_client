import { useNavigate } from "react-router";
import thumbs from "../assets/icon/ThumbsUp.svg";
import Cart from "../assets/icon/ShoppingCart.svg";
import image from "../assets/icon/default-image.jpg";
const URL = import.meta.env.VITE_API_URL

function Card({ product }) {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="relative top-8 max-h-[360px] max-w-[377px] min-w-[158px] snap-center transition duration-150 ease-linear hover:scale-105">
      <img
        src={`${URL}${product?.images?.[0] || image}`}
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
            className="text-[#4F5665] max-sm:text-[12px] sm:text-md"
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
            <p className="text-sm leading-[100%] text-gray-600 sm:text-md">
              {product?.total_ratings || 0} users recommend this product
            </p>
          </div>
          <div className="flex flex-row gap-[10px] items-center text-lg font-medium text-[#FF8906] sm:text-2xl">
            {product?.discount ? (
              <>
                <p className="text-xs text-[#D00000] line-through">
                  IDR {product.price.toLocaleString("id-ID")}
                </p>
                <p className="text-md leading-[100%] font-medium tracking-normal text-[#FF8906]">
                  IDR {(
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
            <button className="flex w-1/3 cursor-pointer flex-col items-center justify-center rounded-md border border-[#FF8906] p-2 max-sm:w-full">
              <img src={Cart} alt="Add to cart" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
