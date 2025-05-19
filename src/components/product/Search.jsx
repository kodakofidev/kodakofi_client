import { useState, useEffect, useRef } from 'react'
import filter from '../../assets/icon/Filter.svg'
import searchpic from '../../assets/icon/Search2.svg'

function Search({ filters, onFilterApply }) {
  const formRef = useRef(null)
  const [search, setSearch] = useState(filters.search || "")
  const [category, setCategory] = useState(filters.category || "")
  const [options, setOptions] = useState(filters.options || "")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setSearch(filters.search || "")
    setCategory(filters.category || "")
    setOptions(filters.options || "")
  }, [filters])

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset()
      setSearch("")
      setCategory("")
      setOptions("")
    }
  }

  function showMenu() {
    setIsVisible((prev) => !prev)
  }

  return (
    <div className='block md:hidden lg:hidden xl:hidden relative'>
      <form ref={formRef}
          onSubmit={(e) => {
            e.preventDefault()
            onFilterApply({
              search,
              category,
              options
            })
          }}>
            <div className='flex flex-row gap-[10px] justify-between px-4 md:px-12 mt-20'>
                <div className='flex flex-row border border-[#777c82] bg-[#e8e8e8] rounded-sm p-2 w-full'>
                    <img src={searchpic} alt="search" />
                    <input type="text" 
                      name="search"  
                      value={search}
                      placeholder='Search Your Product' 
                      onChange={(e) => setSearch(e.target.value)}
                      className='bg-[#e8e8e8] outline-none text-xs text-black w-full mx-2' 
                    />
                </div>
                <div onClick={showMenu} className='rounded-md bg-[#ff8906] px-2 pb-2 pt-3'><img src={filter} alt="Filter" /></div>
            </div>
            <div className={`${isVisible ? "visible" : "invisible"} bg-[#000000cc] flex flex-row justify-between absolute left-4 rounded-lg p-5 w-[91vw] sm:w-[95vw] transition-all duration-300 ease-in-out`}>
              <div className='my-2'>
                <label className='text-white text-xs font-semibold'>Category</label>
                {['Coffee', 'Non-Coffee', 'Food', 'Dessert', 'Snack', 'Topping'].map(type => (
                  <div key={type} className='flex flex-row items-center gap-2 my-2 relative'>
                    <input type="radio" name="category" id={type} checked={category === type}
                    onChange={() => setCategory(type)}
                     className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] cursor-pointer" />
                    <label htmlFor={type} className='text-white text-xs cursor-pointer capitalize'>{type}</label>
                  </div>
                ))}
              </div> 
              <div className='my-2'>
                <label className='text-white text-xs font-semibold'>Sort by</label>
                {['favorite', 'newest', 'oldest', 'ascending', 'descending', 'cheapest'].map(sort => (
                  <div key={sort} className='flex flex-row items-center gap-2 my-2 relative'>
                    <input type="radio" name='options' id={sort} checked={options === sort}
                    onChange={() => setOptions(sort)}
                     className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] cursor-pointer" />
                    <label htmlFor={sort} className='text-white text-xs capitalize'>{sort}</label>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-[5px] my-10'>
                <button type='submit' className='bg-[#ff8906] w-full h-10 rounded-md p-2 text-xs'>Apply filter</button>
                <button type='button' onClick={handleReset} className='bg-[#ff8906] w-full h-10 rounded-md p-2 text-xs'>Reset filter</button>
              </div>
              
            </div>
      </form>
    </div>
  )
}

export default Search