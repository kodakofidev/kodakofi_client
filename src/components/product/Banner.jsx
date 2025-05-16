import icon from '../../assets/icon/mom-day.png'

function Banner() {
  return (
    <div className='flex flex-row rounded-xl bg-[#88B788] min-w-[250px] lg:min-w-[300px]'>
      <div className='w-[100px] h-[100px] px-1'><img src={icon} alt="Coupon" /></div>
      <div className='flex flex-col gap-[2px] lg:gap-[5px] pr-1'>
        <p className='font-bold text-xs lg:text-sm whitespace-normal pt-2'>HAPPY MOTHER’S DAY!</p>
        <p className='text-xs lg:text-sm whitespace-normal'>Get one of our favorite menu for free!</p>
        <p className='text-white pt-1 text-xs lg:text-sm whitespace-normal lg:pb-2'>Klaim Kupon</p>
      </div>
    </div>
  )
}

export default Banner
