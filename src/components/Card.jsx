import { useEffect, useState } from "react"

import thumbs from "../assets/icon/ThumbsUp.svg"
import Cart from "../assets/icon/ShoppingCart.svg"
import kopi from "../assets/kopi.jpg"

function Card() {
  const [product, setProduct] = useState({
    name: "Matcha Latte",
    image: { kopi },
    desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    review: 200,
    price: "20,000",
  })

  const getProduct = async () => {
    try {
      const res = await fetch(`localhost:8080/api/products`)
      const products = await res.json()
      setProduct(products.data)
    } catch (error) {
      console.error("Failed to load product", error)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className='relative min-w-[158px] max w-1/3 max-w-[377px] max-h-[360px]  top-8 hover:scale-105 transition duration-150 ease-linear  '>
      <img
        src={product.image.kopi}
        alt='product'
        className='h-[215px] sm:h-[240px] lg:h-[360px] w-full'
      />
      <div className='bg-[#D00000]  absolute top-[10px] left-[10px] p-[10px]  rounded-full text-white text-center  px-3 py-2 font-lg font-bold max-sm:text-[12px]'>
        FLASH SALE
      </div>
      <div className='flex flex-col justify-center px-1 sm:px-2 relative -top-16  '>
        <div className='bg-[#fff] flex flex-col gap-[10px] md:p-[10px] max-sm:p-2 p-3'>
          <div className='text-lg md:text-2xl text-(--color-text-black) leading-[100%] font-medium'>
            {product.name}
          </div>
          <div className='text-[#4F5665] max-sm:text-[12px] sm:text-sm'>
            {product.desc}
          </div>
          <div className='flex flex-row items-center gap-[10px]'>
            <div>
              <img src={thumbs} alt='rating' width={16} height={16} />
            </div>
            <p className='text-sm sm:text-lg leading-[100%] text-(--color-text-gray)'>
              {product.review} + Review
            </p>
          </div>
          <div className='text-[#FF8906] text-lg font-medium sm:text-2xl '>
            IDR. {product.price}
          </div>
          <div className='flex flex-row gap-[10px] max-sm:flex-col '>
            <button className='bg-[#FF8906] max-sm:w-full rounded-md py-2 w-3/4 cursor-pointer'>
              Buy
            </button>
            <button className='max-sm:w-full border border-[#FF8906] rounded-md p-2 w-1/3 flex flex-col items-center justify-center cursor-pointer'>
              <img src={Cart} alt='Add to cart' width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
