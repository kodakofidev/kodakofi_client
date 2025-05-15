import { useEffect, useState } from "react"
import imageProductUtama from "../../assets/product-details/image_utama.png"
import imageChildSatu from "../../assets/product-details/child-image1.png"
import imageChildDua from "../../assets/product-details/child-image2.png"
import imageChildTiga from "../../assets/product-details/child-image3.png"
import thumbsup from "../../assets/product-details/like.svg"
import shoppingCart from "../../assets/product-details/shoppingCart.svg"
import prev from "../../assets/product-details/arrow-right.svg"
import Card from "../../components/Card"
const ProductDetails = (data) => {
  const dataTest = {
    name: "Hazelnut Latte",
    size: ["regular", "medium", "large"],
    toping: ["ice", "hot"],
    isRecommended: false,
    price: 20000,
    discount: {
      name: "flash sale",
      discount: 0.5,
    },
  }
  const [isRecommended, setIsRecommended] = useState(dataTest.isRecommended)

  const [order, setOrder] = useState({
    size: dataTest.size[0],
    toping: dataTest.toping[0],
    qty: 1,
    discount: "flash sale",
  })

  useEffect(() => {}, [])

  const [image, setImage] = useState([
    imageProductUtama,
    imageChildSatu,
    imageChildDua,
    imageChildTiga,
  ])
  const [selectedImage, setSelectedImage] = useState(imageProductUtama)
  return (
    <main className=' px-4 lg:px-8 md:px-12 xl:px-24 mt-40 '>
      <section className=' gap-5 lg:flex mb-[55px]'>
        <div className='  basis-[500px] shrink-0 mb-4'>
          <div className='mb-[27px] flex justify-center'>
            <img
              src={selectedImage}
              alt='image product'
              className=' max-sm:max-h-[320px] max-md:w-[357px] md:w-[578px] lg:w-[580px] lg:h-[554px]'
            />
          </div>
          <div className='flex w-full gap-5 justify-center  max-sm:snap-x max-sm:snap-mandatory '>
            {image.map((item) => {
              if (item != selectedImage) {
                return (
                  <div className='max-sm:snap-center max-sm:snap-always '>
                    <img
                      src={item}
                      alt='product image'
                      onClick={() => setSelectedImage(item)}
                      className=' max-sm:w-full max-md:max-w-[104px] md:w-[180px] md:h-[172px] '
                    />
                  </div>
                )
              }
            })}
          </div>
        </div>
        <div className='shrink-2'>
          <div className=''>
            <p
              className={`bg-[#D00000] max-sm:text-sm text-lg text-white leading-6 p-[10px] rounded-3xl font-bold md:text-lg w-max mb-4 p-[10px] uppercase`}
            >
              {order.discount}
            </p>

            <p className='max-sm:text-2xl text-5xl leading-[100%] text-[#0B0909] font-medium mb-4 '>
              {dataTest.name}
            </p>
          </div>
          <div className='flex items-center gap-3 mb-4'>
            <span className='text-[#D00000] text-[12px] stricke line-through '>
              IDR 20.000
            </span>
            <span className='text-[#FF8906] font-medium text-[22px] leading-[100%] tracking-normal'>
              IDR 10.000
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
              <img src={thumbsup} alt='thumsup' width={24} height={24} />
            </div>
          </div>
          <p className='text-[#4F5665] leading-[100%] mb-4 max-sm:text-sm'>
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>
          <div className='flex gap-4 items-center mb-4 lg:mb-14'>
            <button
              className='w-[33.6px] h-[33.6px] rounded-[4px] border border-[#FF8906] text-[#0B132A] font-semibold text-lg'
              onClick={() =>
                setOrder((prev) => ({
                  ...prev,
                  qty: prev.qty > 1 ? prev.qty - 1 : 1,
                }))
              }
            >
              -
            </button>
            <span className='text-sm font-bold text-[#0B132A] leading-5 tracking-normal '>
              {order.qty}
            </span>
            <button
              className='w-[33.6px] h-[33.6px] rounded-[4px] bg-[#FF8906] text-[#0B132A] font-semibold text-lg'
              onClick={() =>
                setOrder((prev) => ({
                  ...prev,
                  qty: prev.qty + 1,
                }))
              }
            >
              +
            </button>
          </div>
          <div>
            <h3 className='text-lg font-bold text-[#0B0909] font-bold leading-6 mb-4'>
              Choose Size
            </h3>
            <div className='flex gap-8 w-full mb-4 flex-wrap'>
              {dataTest.size.map((item) => (
                <button
                  onClick={() => setOrder((prev) => ({ ...prev, size: item }))}
                  className={`${
                    order.size === item
                      ? "border border-[#FF8906] text-[#0B0909]"
                      : "border border-[#E8E8E8] text-[#4F5665] "
                  }  leading-[100%] flex-1 p-[10px]`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-bold text-[#0B0909] font-bold leading-6 mb-4'>
              Hot/Ice?
            </h3>
            <div className='flex gap-8 w-full mb-[58px] flex-wrap'>
              {dataTest.toping.map((item) => (
                <button
                  onClick={() =>
                    setOrder((prev) => ({ ...prev, toping: item }))
                  }
                  className={`${
                    order.toping === item
                      ? "border border-[#FF8906] text-[#0B0909]"
                      : "border border-[#E8E8E8] text-[#4F5665] "
                  }  leading-[100%] flex-1 p-[10px]`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className=' w-full gap-5 md:flex'>
              <button className='text-[#0B132A] p-3 font-medium text-sm leading-5 bg-[#FF8906] rounded-md flex-1 w-full max-md:mb-4'>
                Buy
              </button>
              <button className='flex flex-1 items-center justify-center border border-[#FF8906] rounded-md w-full p-3 font-medium text-sm'>
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
        <h3 className='font-medium max-md:text-2xl max-md:text-center text-5xl text-left leading-[100%] text-center text-[#0B132A]  '>
          Recommendation
          <strong className='font-medium text-[#8E6447]'> For You</strong>
        </h3>
        <div className='h-[800px] flex '>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='flex my-14 gap-5 justify-center'>
          <button
            type='button'
            className='text-[#0B0909] bg-[#FF8906] leading-5 flex items-center justify-center  rounded-full w-10 h-10'
          >
            1
          </button>
          <button
            type='button'
            className='text-[#A0A3BD] bg-[#E8E8E8] font-medium font-medium leading-5 flex items-center justify-center  rounded-full w-10 h-10'
          >
            2
          </button>
          <button
            type='button'
            className='text-[#A0A3BD] bg-[#E8E8E8] font-medium leading-5 flex items-center justify-center  rounded-full w-10 h-10 '
          >
            3
          </button>
          <button
            type='button'
            className='text-[#A0A3BD] bg-[#E8E8E8] font-mediumleading-5 flex items-center justify-center  rounded-full w-10 h-10'
          >
            4
          </button>
          <button
            type='button'
            className='text-[#0B0909] bg-[#FF8906] leading-5 flex items-center justify-center  rounded-full w-10 h-10'
          >
            <img src={prev} alt='next icon' />
          </button>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails
