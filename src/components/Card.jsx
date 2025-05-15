import { useEffect, useState } from 'react'

import thumbs from '../assets/icon/ThumbsUp.svg'
import Cart from '../assets/icon/ShoppingCart.svg'
import kopi from '../assets/kopi.jpg'

function Card() {
    const [product, setProduct] = useState(
        {
        name: "Matcha Latte",
        image: {kopi},
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi debitis dolorem tempore, a quae rerum, fugiat sit reprehenderit deserunt dicta expedita voluptates magnam hic minus porro placeat architecto natus?",
        review: "200 users like this product",
        price: "20,000"
        }
    )

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
    <div className='relative w-full h-full mt-20'>
        <div className='w-full h-[285px] bg-[#FF8906]'>
            <div className='h-[300px] w-[300px]'><img src={product.image} alt="product" /></div>
            <div className='bg-white'></div>
        </div>
        <div className='flex flex-col gap-[40vh] p-5 absolute top-0'>
            <div className='bg-[#D00000] rounded-full text-white text-center w-[150px] px-3 font-lg font-bold'>FLASH SALE</div>
            <div className='bg-white flex flex-col gap-[10px] p-5'>
                <div className='text-2xl text-black'>{product.name}</div>
                <div className='text-[#4F5665]'>{product.desc}</div>
                <div className='flex flex-row items-center gap-[10px]'>
                    <div><img src={thumbs} alt="rating" /></div>
                    <div>{product.review}</div>
                </div>
                <div className='text-[#FF8906] text-2xl'>IDR. {product.price}</div>
                <div className='flex flex-row gap-[10px]'>
                    <button className='bg-[#FF8906] rounded-md py-2 w-9/10'>Buy</button>
                    <button className='border border-[#FF8906] rounded-md p-2 w-1/10 flex flex-col items-center justify-center'><img src={Cart} alt="Add to cart" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
