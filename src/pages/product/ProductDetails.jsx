import { useState } from "react"
import imageChildSatu from "../../assets/product-details/child-image1.png"
import imageChildDua from "../../assets/product-details/child-image2.png"
import imageChildTiga from "../../assets/product-details/child-image3.png"
import thumbsup from "../../assets/product-details/like.svg"
import liked from "../../assets/product-details/liked.svg"
import shoppingCart from "../../assets/product-details/shoppingCart.svg"
import prev from "../../assets/product-details/arrow-right.svg"
import Card from "../../components/Card"
const ProductDetails = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 3

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
    { id: 12, content: "Card 12" },
  ]

  const totalPages = Math.ceil(allCards.length / cardsPerPage)
  const getCurrentCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    return allCards.slice(startIndex, endIndex)
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

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
  })

  const [isRecommended, setIsRecommended] = useState(false)
  const [selectedImage, setSelectedImage] = useState(dataTest.image[0])
  const [order, setOrder] = useState({
    id: dataTest.id,
    size: dataTest.size ? dataTest.size[0] : null,
    toping: dataTest.toping ? dataTest.toping[0] : null,
    qty: 1,
  })
  const [error, setError] = useState({
    qty: "",
  })

  const handleBuyProduct = () => {
    if (order.qty > dataTest.stock) {
      console.log(error.qty)
      return
    }
    console.log(order)
  }
  const handleAddToCart = () => {
    console.log(order)
  }

  return (
    <main className=' px-4 lg:px-8 md:px-12 xl:px-24 mt-20 md:mt-25 lg:mx-auto '>
      <section className=' gap-5 lg:flex mb-[55px]'>
        <div className='  basis-[500px] shrink-0 mb-4'>
          <div className='mb-[27px] flex justify-center'>
            <img
              src={selectedImage}
              alt='image product'
              className='  max-md:w-[357px] md:w-[578px] lg:w-[580px]  aspect-square'
            />
          </div>
          <div className='flex w-full gap-5 justify-center  max-sm:snap-x max-sm:snap-mandatory '>
            {dataTest.image.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='max-sm:snap-center max-sm:snap-always '
                >
                  <img
                    src={item}
                    alt='product image'
                    onClick={() => setSelectedImage(item)}
                    className=' max-sm:w-full max-md:max-w-[104px] md:w-[180px] md:h-[172px] '
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className='shrink-2  '>
          <p
            className={`bg-[#D00000] max-sm:text-sm text-white max-md:-ml-4 leading-6  rounded-3xl font-bold md:text-base w-max mb-4 p-[10px] uppercase max-sm:scale-75 sm:scale-90 `}
          >
            {dataTest.discount.name}
          </p>

          <h3 className='max-sm:text-2xl text-4xl leading-[100%] text-(-color-text-black) font-medium mb-4 '>
            {dataTest.name}
          </h3>
          <div className='flex items-center gap-3 mb-4'>
            <span className='text-[#D00000] text-[12px] stricke line-through '>
              IDR {dataTest.price.toLocaleString("id-ID")}
            </span>
            <span className='text-[#FF8906] font-medium text-[22px] leading-[100%] tracking-normal'>
              IDR{" "}
              {(
                dataTest.price -
                dataTest.price * dataTest.discount.discount
              ).toLocaleString("id-ID")}
            </span>
          </div>
          <div className='flex gap-4 items-center mb-4'>
            <span className='text-[#4F5665] max-sm:text-sm text-lg leading-[100%] tracking-normal '>
              200+Review
            </span>
            <span className='text-[#4F5665] max-sm:text-sm text-lg leading-[100%] tracking-normal '>
              |
            </span>
            <span className='text-[#4F5665] max-sm:text-sm text-lg leading-[100%] tracking-normal'>
              Recommendation
            </span>
            <div className='mb-1'>
              <button
                className='cursor-pointer'
                onClick={() => setIsRecommended(!isRecommended)}
              >
                {isRecommended ? (
                  <img src={liked} alt='thumsup' width={24} height={24} />
                ) : (
                  <img src={thumbsup} alt='thumsup' width={24} height={24} />
                )}
                {isRecommended}
              </button>
            </div>
          </div>
          <p className='text-[#4F5665] leading-[100%] mb-4 max-sm:text-sm'>
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>
          <div className='flex gap-4 items-center mb-4 lg:mb-10'>
            <button
              className='w-[33.6px] h-[33.6px] rounded-[4px] border border-(--secondary-color) text-[#0B132A] font-semibold text-lg cursor-pointer hover:text-[#0B0909] hover:bg-(--secondary-color) transition duration-150 ease-linear'
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
              type='text'
              value={order.qty}
              className='w-5 text-sm font-bold text-[#0B132A] leading-5 tracking-normal text-center outline-none'
              onChange={(e) => {
                const value = e.target.value
                if (value === "" || /^[0-9]+$/.test(value)) {
                  setOrder((prev) => ({ ...prev, qty: parseInt(value) }))
                }
                if (value > dataTest.stock) {
                  setError((prev) => ({
                    ...prev,
                    qty: `You cannot order more than ${dataTest.stock} items`,
                  }))
                }
              }}
            />
            <button
              className={` 
               ${
                 parseInt(order.qty) > parseInt(dataTest.stock)
                   ? "hover:disabled"
                   : ""
               }
                 w-[33.6px] h-[33.6px] rounded-[4px] bg-(--secondary-color) text-[#0B132A] font-semibold text-lg  cursor-pointer hover:text-[#0B0909] hover:bg-(--secondary-color) transition duration-150 ease-linear`}
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
            <h3 className='text-lg font-bold text-[#0B0909]  leading-6 mb-4'>
              Choose Size
            </h3>
            <div className='flex gap-8 w-full mb-4 flex-wrap'>
              {dataTest.size.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setOrder((prev) => ({ ...prev, size: item }))}
                  className={`${
                    order.size === item
                      ? "border border-(--secondary-color) bg-(--secondary-color) text-[#0B0909] font-semibold"
                      : "border border-(--color-white) text-[#4F5665] font-medium"
                  }  leading-[100%] flex-1 p-[10px] cursor-pointer hover:bg-(--secondary-color) hover:bg-(--secondary-color) hover:text-[#0B0909]`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-bold text-[#0B0909]  leading-6 mb-4'>
              Hot/Ice?
            </h3>
            <div className='flex gap-8 w-full mb-10 lg:mb-24 flex-wrap'>
              {dataTest.toping.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setOrder((prev) => ({ ...prev, toping: item }))
                  }
                  className={`${
                    order.toping === item
                      ? "border border-(--secondary-color) bg-(--secondary-color) text-[#0B0909] font-semibold"
                      : "border border-(--color-white) text-[#4F5665] font-medium"
                  }  leading-[100%] flex-1 p-[10px] cursor-pointer hover:bg-(--secondary-color) hover:bg-(--secondary-color) hover:text-[#0B0909] hover:font-semibold `}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className=' w-full gap-5 md:flex'>
              <button
                className='text-[#0B0909] p-3 font-medium text-sm leading-5 bg-[#FF8906] rounded-md flex-1 w-full max-md:mb-4 cursor-pointer hover:font-semibold hover:scale-105 transition duration-150 ease-linear '
                onClick={() => handleBuyProduct()}
              >
                Buy
              </button>
              <button
                className='flex flex-1 gap-[10px] items-center justify-center border border-[#FF8906] rounded-md w-full p-3 font-medium text-sm cursor-pointer hover:scale-105 hover:font-semibold transition duration-150 ease-linear '
                onClick={() => handleAddToCart()}
              >
                <img src={shoppingCart} alt='shopping cart icon' />
                <span className='text-[#FF8906] max-sm:hidden'>
                  add to cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className='font-medium max-md:text-2xl max-sm:text-center text-5xl text-left leading-[100%]  text-[#0B132A]'>
          Recommendation
          <strong className='font-medium text-[#8E6447]'> For You</strong>
        </h3>
        <div className='flex ms:overflow-x-auto gap-4 mt-4 py-4   max-sm:overflow-y-hidden min-h-[540px] scrollbar-hide '>
          {getCurrentCards().map((card) => (
            <Card key={card.id} />
          ))}
        </div>

        <div className='flex my-14 gap-5 justify-center'>
          <button
            key='prev'
            type='button'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-[#0B0909] ${
              currentPage === 1 ? "bg-[#E8E8E8]" : "bg-[#FF8906]"
            } leading-5 flex items-center justify-center rounded-full w-10 h-10 cursor-pointer disabled:cursor-not-allowed `}
          >
            <img src={prev} alt='next icon' className='rotate-180' />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type='button'
              onClick={() => handlePageChange(page)}
              className={`${
                currentPage === page
                  ? "text-[#0B0909] bg-[#FF8906]"
                  : "text-[#A0A3BD] bg-[#E8E8E8] hover:text-[#0B0909] hover:bg-[#FF8906]"
              } font-medium leading-5 flex items-center justify-center rounded-full w-10 h-10 cursor-pointer transition duration-150 ease-in-out`}
            >
              {page}
            </button>
          ))}
          <button
            key='next'
            type='button'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-[#0B0909] ${
              currentPage === totalPages ? "bg-[#E8E8E8]" : "bg-[#FF8906]"
            } leading-5 flex items-center justify-center rounded-full w-10 h-10 cursor-pointer disabled:cursor-not-allowed `}
          >
            <img src={prev} alt='next icon' />
          </button>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails
