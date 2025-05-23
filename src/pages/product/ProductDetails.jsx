import { useState, useEffect, use } from "react";
import { useParams, useNavigate } from "react-router";
import thumbsup from "../../assets/product-details/like.svg";
import liked from "../../assets/product-details/liked.svg";
import shoppingCart from "../../assets/product-details/shoppingCart.svg";
import prev from "../../assets/product-details/arrow-right.svg";
import Card from "../../components/Card";
import { addOrder } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";
import constants from "../../configs/constant";
const ProductDetails = () => {
  const { id } = useParams();
  console.log("product_id from useParams:", id);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [isRecommended, setIsRecommended] = useState(false);
  const [recomProduct, setRecomProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [sizeId, setSizeId] = useState(4);
  const [order, setOrder] = useState(null);
  const [isIced, setIsIced] = useState(false);
  const [error, setError] = useState({
    qty: "",
  });

  const navigate = useNavigate();
  console.log(order, "ini order");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${constants.apiUrl}/product/${id}`);
        const data = await res.json();
        const productDetail = data.data.detail;
        const recommendProduct = data.data.recommended;

        if (!productDetail.toping) {
          productDetail.toping = ["Hot", "Ice"];
        }

        setProduct(productDetail);
        console.log("product: ", productDetail);
        setRecomProduct(recommendProduct);
        setSelectedImage(productDetail?.images?.[0] || null);

        setOrder({
          id: productDetail.id,
          name: productDetail.name,
          image: productDetail?.images?.[0],
          size: productDetail?.size?.[0] || "",
          toping:
            productDetail?.category_id === 1 || productDetail?.category_id === 2
              ? productDetail?.toping
              : "",
          qty: 1,
          size_id: sizeId,
          price: productDetail?.discount
            ? productDetail?.price -
              productDetail?.price * productDetail?.discount
            : productDetail?.price,
          is_iced: isIced,
          pricebefore: productDetail?.price,
        });
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  const allCards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
    { id: 6, content: "Card 6" },
    { id: 7, content: "Card 7" },
    { id: 8, content: "Card 8" },
    { id: 9, content: "Card 9" },
  ];

  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  const getPaginationItems = () => {
    const pages = [];
    const maxVisible = 3;
    const halfVisible = Math.floor(maxVisible / 2);
    pages.push(1);
    if (currentPage - halfVisible > 2) {
      pages.push("...");
    }
    let start = Math.max(2, currentPage - halfVisible);
    let end = Math.min(totalPages - 1, currentPage + halfVisible);
    if (currentPage <= halfVisible + 1) {
      end = Math.min(maxVisible, totalPages - 1);
    }
    if (currentPage >= totalPages - halfVisible) {
      start = Math.max(2, totalPages - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }
    if (currentPage + halfVisible < totalPages - 1) {
      pages.push("...");
    }
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    return pages;
  };

  const getCurrentCards = () => {
    // const startIndex = (currentPage - 1) * cardsPerPage;
    // const endIndex = startIndex + cardsPerPage;
    // return allCards.slice(startIndex, endIndex);
    const startIndex = (currentPage - 1) * 3;
    return recomProduct.slice(startIndex, startIndex + 3);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleBuyProduct = () => {
    if (order.qty > product.stock) {
      console.log(error.qty);
      return;
    }
    dispatch(addOrder(order));
    navigate(`/checkout`);
    console.log(order);
  };

  const handleAddToCart = () => {
    dispatch(addOrder(order));
  };

  return (
    <main className="mt-20 max-w-[1440px] px-4 md:mt-25 md:px-12 lg:mx-auto lg:px-8 xl:px-24">
      <section className="mb-[55px] gap-5 lg:flex">
        <div className="mb-4 shrink-0 basis-[500px]">
          <div className="mb-[27px] flex justify-center">
            <img
              src={`${constants.productUrl}${selectedImage}`}
              alt={product?.name}
              className="aspect-square max-md:w-[357px] md:w-[578px] lg:w-[580px]"
            />
          </div>
          <div className="flex w-full justify-center gap-5 max-sm:snap-x max-sm:snap-mandatory">
            {product?.images?.map((item, idx) => (
              <div key={idx} className="max-sm:snap-center max-sm:snap-always">
                <img
                  src={`${constants.productUrl}${item}`}
                  alt={product?.name}
                  onClick={() => setSelectedImage(item)}
                  className="aspect-square max-md:max-w-[104px] max-sm:w-full md:h-[172px] md:w-[180px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-2">
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

          <h3 className="text-(-color-text-black) mb-4 text-4xl leading-[100%] font-medium max-sm:text-2xl">
            {product?.name}
          </h3>
          <div className="mb-4 flex items-center gap-3">
            {product?.discount ? (
              <>
                <p className="text-xs text-[#D00000] line-through">
                  IDR {product.price.toLocaleString("id-ID")}
                </p>
                <p className="text-md leading-[100%] font-medium tracking-normal text-[#FF8906] lg:text-2xl">
                  IDR{" "}
                  {(
                    product.price -
                    product.price * product.discount
                  ).toLocaleString("id-ID")}
                </p>
              </>
            ) : (
              <span className="text-md leading-[100%] font-medium tracking-normal text-[#FF8906] lg:text-2xl">
                IDR {product?.price.toLocaleString("id-ID")}
              </span>
            )}
          </div>
          <div className="mb-4 flex items-center gap-4">
            <span className="text-lg leading-[100%] tracking-normal text-[#4F5665] max-sm:text-sm">
              {product?.total_ratings} users recommend this product
            </span>
            <span className="text-lg leading-[100%] tracking-normal text-[#4F5665] max-sm:text-sm">
              |
            </span>
            <span className="text-lg leading-[100%] tracking-normal text-[#4F5665] max-sm:text-sm">
              Recommendation
            </span>
            <div className="mb-1">
              <button
                className="cursor-pointer"
                onClick={() => setIsRecommended(!isRecommended)}
              >
                {isRecommended ? (
                  <img src={liked} alt="thumsup" width={24} height={24} />
                ) : (
                  <img src={thumbsup} alt="thumsup" width={24} height={24} />
                )}
              </button>
            </div>
          </div>

          <p className="mb-4 leading-[100%] text-[#4F5665] max-sm:text-sm">
            {product?.description}
          </p>

          <div className="mb-4 flex items-center gap-4 lg:mb-10">
            <button
              className="h-[33.6px] w-[33.6px] cursor-pointer rounded-[4px] border border-(--secondary-color) text-lg font-semibold text-[#0B132A] transition duration-150 ease-linear hover:bg-(--secondary-color) hover:text-[#0B0909]"
              onClick={() =>
                setOrder((prev) => ({
                  ...prev,
                  qty: prev.qty > 1 ? prev.qty - 1 : 1,
                }))
              }
            >
              -
            </button>
            <input
              type="text"
              value={order?.qty}
              className="w-5 text-center text-sm leading-5 font-bold tracking-normal text-[#0B132A] outline-none"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^[0-9]+$/.test(value)) {
                  setOrder((prev) => ({ ...prev, qty: parseInt(value) || 1 }));
                }
                if (value > product.stock) {
                  setError((prev) => ({
                    ...prev,
                    qty: `You cannot order more than ${product?.stock} items`,
                  }));
                }
              }}
            />
            <button
              className={`h-[33.6px] w-[33.6px] cursor-pointer rounded-[4px] bg-(--secondary-color) text-lg font-semibold text-[#0B132A] transition duration-150 ease-linear hover:bg-(--secondary-color) hover:text-[#0B0909] ${
                parseInt(order?.qty) > parseInt(product?.stock)
                  ? "hover:disabled"
                  : ""
              }`}
              onClick={() =>
                setOrder((prev) => ({
                  ...prev,
                  qty:
                    prev.qty == product?.stock || prev.qty > product?.stock
                      ? product.stock
                      : prev.qty + 1,
                }))
              }
            >
              +
            </button>
          </div>

          {product?.category_id < 3 ? (
            <>
              <h3 className="mb-4 text-lg leading-6 font-bold text-[#0B0909]">
                Choose Size
              </h3>
              {product.category_id < 3 ? (
                <div className="mb-4 flex w-full flex-wrap gap-8">
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
                          ? "border border-(--secondary-color) bg-(--secondary-color) font-semibold text-[#0B0909]"
                          : "border border-(--color-white) font-medium text-[#4F5665]"
                      } flex-1 cursor-pointer p-[10px] leading-[100%] hover:bg-(--secondary-color) hover:text-[#0B0909]`}
                    >
                      {item.size}
                    </button>
                  ))}
                </div>
              ) : (
                <></>
              )}

              <div>
                <h3 className="mb-4 text-lg leading-6 font-bold text-[#0B0909]">
                  Hot/Ice?
                </h3>
                <div className="mb-10 flex w-full flex-wrap gap-8 lg:mb-24">
                  {product?.toping?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setOrder((prev) => ({
                          ...prev,
                          is_iced: item === "Ice" ? true : false,
                          toping: item,
                        }))
                      }
                      className={`${
                        order?.toping === item
                          ? "border border-(--secondary-color) bg-(--secondary-color) font-semibold text-[#0B0909]"
                          : "border border-(--color-white) font-medium text-[#4F5665]"
                      } flex-1 cursor-pointer p-[10px] leading-[100%] hover:bg-(--secondary-color) hover:font-semibold hover:text-[#0B0909]`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="hidden"> </div>
            </>
          )}

          <div className="w-full gap-5 md:flex">
            <button
              className="w-full flex-1 cursor-pointer rounded-md bg-[#FF8906] p-3 text-sm leading-5 font-medium text-[#0B0909] transition duration-150 ease-linear hover:scale-105 hover:font-semibold max-md:mb-4"
              onClick={() => handleBuyProduct()}
            >
              Buy
            </button>
            <button
              className="flex w-full flex-1 cursor-pointer items-center justify-center gap-[10px] rounded-md border border-[#FF8906] p-3 text-sm font-medium transition duration-150 ease-linear hover:scale-105 hover:font-semibold"
              onClick={() => handleAddToCart()}
            >
              <img src={shoppingCart} alt="shopping cart icon" />
              <span className="text-[#FF8906] max-sm:hidden">add to cart</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-left text-5xl leading-[100%] font-medium text-[#0B132A] max-md:text-2xl max-sm:text-center">
          Recommendation
          <strong className="font-medium text-[#8E6447]"> For You</strong>
        </h3>

        <div className="ms:overflow-x-auto scrollbar-hide mt-4 flex min-h-[540px] snap-x justify-center gap-4 py-4 max-sm:overflow-y-hidden">
          {getCurrentCards().map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <div className="my-14 flex items-center justify-center gap-2">
          <button
            key="prev"
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-[#0B0909] ${
              currentPage === 1 ? "bg-[#E8E8E8]" : "bg-[#FF8906]"
            } flex h-10 w-10 cursor-pointer items-center justify-center rounded-full leading-5 disabled:cursor-not-allowed`}
          >
            <img src={prev} alt="previous icon" className="rotate-180" />
          </button>

          {getPaginationItems().map((item, index) => {
            if (item === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full leading-5 font-medium text-[#A0A3BD]"
                >
                  ...
                </span>
              );
            }
            return (
              <button
                key={item}
                type="button"
                onClick={() => handlePageChange(item)}
                className={`${
                  currentPage === item
                    ? "bg-[#FF8906] text-[#0B0909]"
                    : "bg-[#E8E8E8] text-[#A0A3BD] hover:bg-[#FF8906] hover:text-[#0B0909]"
                } flex h-10 w-10 cursor-pointer items-center justify-center rounded-full leading-5 font-medium transition duration-150 ease-in-out`}
              >
                {item}
              </button>
            );
          })}

          <button
            key="next"
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-[#0B0909] ${
              currentPage === totalPages ? "bg-[#E8E8E8]" : "bg-[#FF8906]"
            } flex h-10 w-10 cursor-pointer items-center justify-center rounded-full leading-5 disabled:cursor-not-allowed`}
          >
            <img src={prev} alt="next icon" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
