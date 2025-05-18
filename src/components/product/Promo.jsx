import { useRef } from 'react'
import prev from '../../assets/icon/arrow-left.svg'
import next from '../../assets/icon/arrow-right2.svg'
import Banner from './Banner'

function Promo() {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  return (
    <>
      <section className='py-10'>
          <div className='flex flex-row items-center justify-between px-4 lg:px-8 md:px-12 xl:px-24'>
            <p className='text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>Today <span className='text-[#8E6447]'>Promo</span></p>
            <div className="flex flex-row gap-[5px] items-center justify-between mb-4">
              <button onClick={scrollLeft} className="hidden md:block lg:block xl:block bg-[#c3beb7] hover:bg-[#FF8906] rounded-full p-2">
                <img src={prev} alt="Previous" />
              </button>
              <button onClick={scrollRight} className="hidden md:block lg:block xl:block bg-[#c3beb7] hover:bg-[#FF8906] rounded-full p-2">
                <img src={next} alt="Next" />
              </button>
            </div>
          </div>
          <div className='flex flex-row gap-[20px]'>
            <div ref={scrollRef} className="flex flex-row gap-[25px] py-5 overflow-x-auto scroll-smooth no-scrollbar">
              <Banner />
              <Banner />
              <Banner />
              <Banner />
              <Banner />
            </div>
          </div>


      </section>
    </>
  )
}

export default Promo
