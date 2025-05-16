import Card from "../Card"
// import next from '../../assets/icon/arrow-right2.svg'

function Product() {
  return (
    <div className="w-full lg:w-3/4 xl:w-3/4 my-5">
        <div className='grid grid-cols-2 auto-rows-[500px]'>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="transform scale-50 md:scale-60 lg:scale-70 origin-top-left md:origin-top lg:origin-top">
                <Card />
              </div>
            ))}
        </div>
        <div className="flex flex-row items-center justify-center w-full h-5 gap-[10px]">
            <div className='rounded-full bg-[#c3beb7] text-[#777c82] text-xs px-[10px] py-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>1</div>
            <div className='rounded-full bg-[#c3beb7] text-[#777c82] text-xs px-[10px] py-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>2</div>
            <div className='rounded-full bg-[#c3beb7] text-[#777c82] text-xs px-[10px] py-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>3</div>
            <div className='rounded-full bg-[#c3beb7] text-[#777c82] text-xs px-[10px] py-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>4</div>
            {/* <div className='relative rounded-full bg-[#c3beb7] text-black px-[1.5vh] hover:bg-[#ff8906] hover:text-white'>
                <img className='absolute top-0 left-0' src={next} alt="Next" />
            </div> */}
        </div>
    </div>
  )
}

export default Product
