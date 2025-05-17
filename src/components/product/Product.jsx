import Card from "../Card"
import next from '../../assets/icon/arrow-right2.svg'

function Product() {
  return (
    <div className="w-full lg:w-2/3 xl:w-3/4">
        <div className='grid grid-cols-2 auto-rows-[500px] lg:auto-rows-[600px] auto-cols-[300px]'>
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <Card />
              </div>
            ))}
        </div>
        <div className="flex flex-row items-center justify-center w-full h-25 md:h-35 gap-[10px]">
            <div className='rounded-full bg-[#c3beb7] text-[#777c82] text-xs px-[10px] py-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>1</div>
            <div className='rounded-full bg-[#c3beb7] text-[#777c82] text-xs px-[10px] py-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>2</div>
            <div className='rounded-full bg-[#c3beb7] text-[#777c82] text-xs px-[10px] py-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>3</div>
            <div className='rounded-full bg-[#c3beb7] text-[#777c82] text-xs px-[10px] py-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>4</div>
            <div  className='relative rounded-full bg-[#c3beb7] text-[#777c82] text-xs p-[5px] hover:bg-[#ff8906] hover:text-black cursor-pointer'>
                <img className='relative' src={next} alt="Next" />
            </div>
        </div>
    </div>
  )
}

export default Product
