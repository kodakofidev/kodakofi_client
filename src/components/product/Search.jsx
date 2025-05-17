import { useState } from 'react'
import filter from '../../assets/icon/Filter.svg'
import search from '../../assets/icon/Search2.svg'

function Search() {
    const [isVisible, setIsVisible] = useState(false)

    function showMenu() {
        setIsVisible((prev) => !prev)
    }

  return (
    <div className='block md:hidden lg:hidden xl:hidden relative'>
        <div className='flex flex-row gap-[10px] justify-between px-4 md:px-12 mt-20'>
            <div className='flex flex-row border border-[#777c82] bg-[#e8e8e8] rounded-sm p-2 w-full'>
                <img src={search} alt="search" />
                <input type="text" name="filter" placeholder='Search Your Product' className='bg-[#e8e8e8] outline-none text-xs text-black w-full mx-2' />
            </div>
            <div onClick={showMenu} className='rounded-md bg-[#ff8906] px-2 pb-2 pt-3'><img src={filter} alt="Filter" /></div>
        </div>
        <div className={`${isVisible ? "visible" : "invisible"} bg-[#000000cc] absolute left-4 rounded-lg p-5 w-[91vw] sm:w-[95vw] transition-all duration-300 ease-in-out`}>
            <form className='flex flex-row gap-10'>
              <div className='my-2'>
                <label htmlFor="category" className='text-white text-xs font-semibold inline-block'>Category</label>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="checkbox" name='food' id='food' className="appearance-none w-4 h-4 bg-black border border-white rounded-md focus:ring-[#ff8906] checked:border-[#ff8906] checked:bg-[#ff8906] checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:text-xs checked:after:text-black cursor-pointer" />
                  <label htmlFor="food" className='text-white text-xs cursor-pointer'>Food</label>
                </div>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="checkbox" name='beverage' id='beverage' className="appearance-none w-4 h-4 bg-black border border-white rounded-md focus:ring-[#ff8906] checked:border-[#ff8906] checked:bg-[#ff8906] checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:text-xs checked:after:text-black cursor-pointer" />
                  <label htmlFor="beverage" className='text-white text-xs cursor-pointer'>Beverage</label>
                </div>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="checkbox" name='addon' id='addon'  className="appearance-none w-4 h-4 bg-black border border-white rounded-md focus:ring-[#ff8906] checked:border-[#ff8906] checked:bg-[#ff8906] checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:text-xs checked:after:text-black cursor-pointer" />
                  <label htmlFor="addon" className='text-white text-xs cursor-pointer'>Add-On</label>
                </div>
              </div>
              <div className='my-2'>
                <label htmlFor="sort" className='text-white text-xs font-semibold inline-block'>Sort by</label>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="radio" name='sortby' id='favorite'  className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] checked:after:bg-[#ff8906] cursor-pointer"  />
                  <label htmlFor="sortby" className='text-white text-xs'>Favorite</label>
                </div>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="radio" name='sortby' id='newest' className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] checked:after:bg-[#ff8906] cursor-pointer"  />
                  <label htmlFor="sortby" className='text-white text-xs'>Newest</label>
                </div>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="radio" name='sortby' id='oldest' className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] checked:after:bg-[#ff8906] cursor-pointer"  />
                  <label htmlFor="sortby" className='text-white text-xs'>Oldest</label>
                </div>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="radio" name='sortby' id='ascending' className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] checked:after:bg-[#ff8906] cursor-pointer"  />
                  <label htmlFor="sortby" className='text-white text-xs'>Ascending</label>
                </div>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="radio" name='sortby' id='descending' className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] checked:after:bg-[#ff8906] cursor-pointer"  />
                  <label htmlFor="sortby" className='text-white text-xs'>Descending</label>
                </div>
                <div className='flex flex-row items-center gap-[7px] my-2 relative'>
                  <input type="radio" name='sortby' id='cheapest' className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] checked:after:bg-[#ff8906] cursor-pointer"  />
                  <label htmlFor="sortby" className='text-white text-xs'>Cheapest</label>
                </div>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Search