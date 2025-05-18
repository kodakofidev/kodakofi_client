import { useState } from "react";
import imageChildSatu from "../../assets/product-details/child-image1.png";
import imageChildDua from "../../assets/product-details/child-image2.png";
import imageChildTiga from "../../assets/product-details/child-image3.png";
import thumbsup from "../../assets/product-details/like.svg";
import liked from "../../assets/product-details/liked.svg";
import shoppingCart from "../../assets/product-details/shoppingCart.svg";
import prev from "../../assets/product-details/arrow-right.svg";
import Card from "../../components/Card";
const ProductDetails = () => {
  // State untuk pagination
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
    { id: 10, content: "Card 10" },
    { id: 11, content: "Card 11" },
    { id: 13, content: "Card 12" },
    { id: 14, content: "Card 12" },
    { id: 15, content: "Card 12" },
    { id: 16, content: "Card 12" },
    { id: 17, content: "Card 12" },
    { id: 18, content: "Card 12" },
    { id: 19, content: "Card 12" },
    { id: 20, content: "Card 12" },
    { id: 21, content: "Card 12" },
    { id: 22, content: "Card 12" },
    { id: 23, content: "Card 12" },
    { id: 24, content: "Card 12" },
    { id: 25, content: "Card 12" },
    { id: 26, content: "Card 12" },
    { id: 27, content: "Card 12" },
    { id: 28, content: "Card 12" },
    { id: 29, content: "Card 12" },
    { id: 30, content: "Card 12" },
    { id: 31, content: "Card 12" },
    { id: 32, content: "Card 12" },
    { id: 33, content: "Card 12" },
    { id: 34, content: "Card 12" },
    { id: 35, content: "Card 12" },
    { id: 36, content: "Card 12" },
    { id: 37, content: "Card 12" },
    { id: 38, content: "Card 12" },
    { id: 39, content: "Card 12" },
    { id: 40, content: "Card 12" },
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
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return allCards.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [dataTest, setDataTest] = useState({
    id: 1,
    name: "Hazelnut Latte",
    size: ["regular", "medium", "large"],
    toping: ["ice", "hot"],
    isRecommended: false,
    price: 20000,
    discount: {
      name: "flash sale",
      discount: 0.5,
    },
    image: [imageChildSatu, imageChildDua, imageChildTiga],
    stock: 10,
    totalRatings: 200,
  });

  const [isRecommended, setIsRecommended] = useState(false);
  const [selectedImage, setSelectedImage] = useState(dataTest.image[0]);
  const [order, setOrder] = useState({
    id: dataTest.id,
    size: dataTest.size ? dataTest.size[0] : null,
    toping: dataTest.toping ? dataTest.toping[0] : null,
    qty: 1,
  });
  const [error, setError] = useState({
    qty: "",
  });

  const handleBuyProduct = () => {
    if (order.qty > dataTest.stock) {
      console.log(error.qty);
      return;
    }
    console.log(order);
  };

  const handleAddToCart = () => {
    console.log(order);
  };

  return (
    <main className="mt-20 px-4 md:mt-25 md:px-12 lg:mx-auto lg:px-8 xl:px-24">
      <section className="mb-[55px] gap-5 lg:flex">
        <div className="mb-4 shrink-0 basis-[500px]">
          <div className="mb-[27px] flex justify-center">
            <img
              src={selectedImage}
              alt="image product"
              className="aspect-square max-md:w-[357px] md:w-[578px] lg:w-[580px]"
            />
          </div>
          <div className="flex w-full justify-center gap-5 max-sm:snap-x max-sm:snap-mandatory">
            {dataTest.image.map((item, idx) => (
              <div key={idx} className="max-sm:snap-center max-sm:snap-always">
                <img
                  src={item}
                  alt="product image"
                  onClick={() => setSelectedImage(item)}
                  className="cursor-pointer max-md:max-w-[104px] max-sm:w-full md:h-[172px] md:w-[180px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-2">
          <p className="mb-4 w-max rounded-3xl bg-[#D00000] p-[10px] leading-6 font-bold text-white uppercase max-md:-ml-4 max-sm:scale-75 max-sm:text-sm sm:scale-90 md:text-base">
            {dataTest.discount.name}
          </p>

          <h3 className="text-(-color-text-black) mb-4 text-4xl leading-[100%] font-medium max-sm:text-2xl">
            {dataTest.name}
          </h3>
          <div className="mb-4 flex items-center gap-3">
            <span className="stricke text-[12px] text-[#D00000] line-through">
              IDR {dataTest.price.toLocaleString("id-ID")}
            </span>
            <span className="text-[22px] leading-[100%] font-medium tracking-normal text-[#FF8906]">
              IDR
              {(
                dataTest.price -
                dataTest.price * dataTest.discount.discount
              ).toLocaleString("id-ID")}
            </span>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <span className="text-lg leading-[100%] tracking-normal text-[#4F5665] max-sm:text-sm">
              {dataTest.totalRatings}+Review
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
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
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
              value={order.qty}
              className="w-5 text-center text-sm leading-5 font-bold tracking-normal text-[#0B132A] outline-none"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^[0-9]+$/.test(value)) {
                  setOrder((prev) => ({ ...prev, qty: parseInt(value) || 1 }));
                }
                if (value > dataTest.stock) {
                  setError((prev) => ({
                    ...prev,
                    qty: `You cannot order more than ${dataTest.stock} items`,
                  }));
                }
              }}
            />
            <button
              className={`h-[33.6px] w-[33.6px] cursor-pointer rounded-[4px] bg-(--secondary-color) text-lg font-semibold text-[#0B132A] transition duration-150 ease-linear hover:bg-(--secondary-color) hover:text-[#0B0909] ${
                parseInt(order.qty) > parseInt(dataTest.stock)
                  ? "hover:disabled"
                  : ""
              }`}
              onClick={() =>
                setOrder((prev) => ({
                  ...prev,
                  qty:
                    prev.qty == dataTest.stock || prev.qty > dataTest.stock
                      ? dataTest.stock
                      : prev.qty + 1,
                }))
              }
            >
              +
            </button>
          </div>

          <div>
            <h3 className="mb-4 text-lg leading-6 font-bold text-[#0B0909]">
              Choose Size
            </h3>
            <div className="mb-4 flex w-full flex-wrap gap-8">
              {dataTest.size.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setOrder((prev) => ({ ...prev, size: item }))}
                  className={`${
                    order.size === item
                      ? "border border-(--secondary-color) bg-(--secondary-color) font-semibold text-[#0B0909]"
                      : "border border-(--color-white) font-medium text-[#4F5665]"
                  } flex-1 cursor-pointer p-[10px] leading-[100%] hover:bg-(--secondary-color) hover:text-[#0B0909]`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg leading-6 font-bold text-[#0B0909]">
              Hot/Ice?
            </h3>
            <div className="mb-10 flex w-full flex-wrap gap-8 lg:mb-24">
              {dataTest.toping.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setOrder((prev) => ({ ...prev, toping: item }))
                  }
                  className={`${
                    order.toping === item
                      ? "border border-(--secondary-color) bg-(--secondary-color) font-semibold text-[#0B0909]"
                      : "border border-(--color-white) font-medium text-[#4F5665]"
                  } flex-1 cursor-pointer p-[10px] leading-[100%] hover:bg-(--secondary-color) hover:font-semibold hover:text-[#0B0909]`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

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

        <div className="mt-4 flex min-h-[580px] w-full items-start justify-start gap-4 overflow-x-auto overflow-y-hidden px-4 py-2 max-sm:snap-x max-sm:snap-mandatory">
          {getCurrentCards().map((card) => (
            <Card key={card.id} />
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
