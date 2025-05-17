import { useNavigate } from "react-router";
import thumbs from "../assets/icon/ThumbsUp.svg"
import Cart from "../assets/icon/ShoppingCart.svg"
import image from '../assets/icon/default-image.jpg'

function Card({product}) {
  const navigate = useNavigate()
  const nextPage = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className='relative min-w-[158px] max-w-[377px] max-h-[360px] top-8 hover:scale-105 transition duration-150 ease-linear'>
      <img
        src={product?.images?.[0] || image }
        alt={product?.name || 'image'}
        className='h-[215px] sm:h-[240px] lg:h-[360px] w-full object-cover'
      />
      <div className='bg-[#D00000] absolute top-[10px] left-[10px] p-[10px] rounded-full text-white text-center px-3 py-2 font-lg font-bold max-sm:text-[12px]'>
        FLASH SALE
      </div>
      <div className='flex flex-col justify-center px-1 sm:px-2 relative -top-16'>
        <div className='bg-[#fff] flex flex-col gap-[10px] md:p-[10px] max-sm:p-2 p-3'>
          <div
            className='text-lg md:text-2xl text-black leading-[100%] font-medium md:h-7 lg:h-10'
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            >
            {product?.name || 'Product Name'}
          </div>
          <div 
            className='text-[#4F5665] max-sm:text-[12px] sm:text-sm'
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
            {product?.description || 'Product Description'}
          </div>
          <div className='flex flex-row items-center gap-[10px]'>
            <img src={thumbs} alt='rating' width={16} height={16} />
            <p className='text-sm sm:text-lg leading-[100%] text-gray-600'>
              {product?.review || 0 } + Review
            </p>
          </div>
          <div className='text-[#FF8906] text-lg font-medium sm:text-2xl'>
            IDR. {product?.price || 0 }
          </div>
          <div className='flex flex-row gap-[10px] max-sm:flex-col'>
            <button onClick={nextPage} className='bg-[#FF8906] max-sm:w-full rounded-md py-2 w-3/4 cursor-pointer'>
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
