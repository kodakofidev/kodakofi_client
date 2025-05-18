import { useState } from 'react'
import filter from '../../assets/icon/Filter.svg'
import search from '../../assets/icon/Search2.svg'

function Search({ name, setName }) {
  const [isVisible, setIsVisible] = useState(false)

  function showMenu() {
    setIsVisible((prev) => !prev)
  }

  return (
    <div className='block md:hidden lg:hidden xl:hidden relative'>
        <div className='flex flex-row gap-[10px] justify-between px-4 md:px-12 mt-20'>
            <div className='flex flex-row border border-[#777c82] bg-[#e8e8e8] rounded-sm p-2 w-full'>
                <img src={search} alt="search" />
                <input type="text" 
                  name="filter" 
                  value={name} 
                  placeholder='Search Your Product' 
                  onChange={(e) => setName(e.target.value)}
                  className='bg-[#e8e8e8] outline-none text-xs text-black w-full mx-2' 
                />
            </div>
            <div onClick={showMenu} className='rounded-md bg-[#ff8906] px-2 pb-2 pt-3'><img src={filter} alt="Filter" /></div>
        </div>
        <div className={`${isVisible ? "visible" : "invisible"} bg-[#000000cc] absolute left-4 rounded-lg p-5 w-[91vw] sm:w-[95vw] transition-all duration-300 ease-in-out`}>
            <form className='flex flex-row gap-10'>
            <div className='my-2'>
              <label className='text-white text-xs font-semibold'>Category</label>
              {['Coffee', 'Non-Coffee', 'Food', 'Dessert', 'Snack', 'Topping'].map(type => (
                <div key={type} className='flex flex-row items-center gap-2 my-2 relative'>
                  <input type="radio" name="category" id={type} className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] cursor-pointer" />
                  <label htmlFor={type} className='text-white text-xs cursor-pointer capitalize'>{type}</label>
                </div>
              ))}
            </div>
              <div className='my-2'>
                <label className='text-white text-xs font-semibold'>Sort by</label>
                {['favorite', 'newest', 'oldest', 'ascending', 'descending', 'cheapest'].map(sort => (
                  <div key={sort} className='flex flex-row items-center gap-2 my-2 relative'>
                    <input type="radio" name='sortby' id={sort} className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] cursor-pointer" />
                    <label htmlFor={sort} className='text-white text-xs capitalize'>{sort}</label>
                  </div>
                ))}
              </div>
            </form>
        </div>
    </div>
  )
}

export default Search