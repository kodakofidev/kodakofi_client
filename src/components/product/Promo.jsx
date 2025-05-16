import prev from '../../assets/icon/arrow-left.svg'
import next from '../../assets/icon/arrow-right2.svg'
import Banner from './Banner'

function Promo() {
  return (
    <>
      <section className='py-10'>
        <div className='flex flex-row items-center justify-between px-4 lg:px-8 md:px-12 xl:px-24'>
            <p className='text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>Today <span className='text-[#8E6447]'>Promo</span></p>
            <div className='flex flex-row gap-[5px] items-center justify-between'>
                <div className='hidden lg:block xl:block bg-[#aaaaaa] hover:bg-[#FF8906] rounded-full p-2'><img src={prev} alt="Previous" /></div>
                <div className='hidden lg:block xl:block bg-[#aaaaaa] hover:bg-[#FF8906] rounded-full p-2'><img src={next} alt="Next" /></div>
            </div>
        </div>
        <div className='flex flex-row overflow-x-auto gap-[25px] py-5'>
            <Banner />
            <Banner />
            <Banner />
            <Banner />
            <Banner />
        </div>
      </section>
    </>
  )
}

export default Promo
