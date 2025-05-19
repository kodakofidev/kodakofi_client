import { useState, useRef, useEffect } from "react"

function Filter({ filters, onFilterApply }) {
  const formRef = useRef(null)
  const minLimit = 0
  const maxLimit = 100000

  const [search, setSearch] = useState(filters.search || "")
  const [category, setCategory] = useState(filters.category || "")
  const [options, setOptions] = useState(filters.options || "")
  const [minPrice, setMinPrice] = useState(filters.minPrice || minLimit)
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || maxLimit)
  const [isMinActive, setIsMinActive] = useState(false)
  const [isMaxActive, setIsMaxActive] = useState(false)

  useEffect(() => {
    setSearch(filters.search || "")
    setCategory(filters.category || "")
    setOptions(filters.options || "")
    setMinPrice(filters.minPrice || minLimit)
    setMaxPrice(filters.maxPrice || maxLimit)
    console.log("Filter props:", filters)
  }, [filters])

  const handleMinInput = (e) => {
    let inputMin = Number(e.target.value)
    if (inputMin < 0) inputMin = 0
    if (inputMin < maxPrice) setMinPrice(inputMin)
  }

  const handleMaxInput = (e) => {
    let inputMax = Number(e.target.value)
    if (inputMax <= 0) inputMax = undefined
    if (inputMax > minPrice) setMaxPrice(inputMax)
  }

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset()
      setSearch("")
      setCategory("")
      setOptions("")
      setMinPrice(minLimit)
      setMaxPrice(maxLimit)
    }
  }

  return (
    <section className='hidden md:block lg:block xl:block bg-black rounded-lg my-5 p-5 w-1/3 h-[650px]'>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-white text-sm font-semibold'>Filter</p>
        <p onClick={handleReset} className='text-white text-xs font-semibold cursor-pointer'>Reset filter</p>
      </div>
      <form ref={formRef} 
        onSubmit={(e) => {
          e.preventDefault()
          onFilterApply({
            search,
            category,
            options,
            minPrice: minPrice > 0 ? minPrice : 0,
            maxPrice: maxPrice > 0 ? maxPrice : 0,
          })
        }}
        className='my-5'>
        <div className='flex flex-col'>
          <label htmlFor="search" className='text-white text-xs font-semibold'>Search</label>
          <input type="text" 
            name="search" 
            placeholder='Search Your Product'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
           className='bg-white rounded-sm text-xs text-black my-1 p-3 w-full' 
          />
        </div>
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
              onChange={() => setOptions(sort)} className="w-4 h-4 rounded-full focus:ring-[#ff8906] checked:border-[#ff8906] cursor-pointer" />
              <label htmlFor={sort} className='text-white text-xs capitalize'>{sort}</label>
            </div>
          ))}
        </div>
        <div className="w-full my-3">
          <label className="text-xs text-white font-semibold">Price Range</label>
          <div className="relative h-7">
            <div className="absolute top-1/2 w-full h-1 bg-[#c3beb7] rounded-md transform -translate-y-1/2" />
            <div className="absolute h-1 bg-[#ff8906] rounded top-1/2 transform -translate-y-1/2"
              style={{
                left: `${(minPrice / maxLimit) * 100}%`,
                width: `${((maxPrice - minLimit) / maxLimit) * 100}%`,
              }}
            />

            {/* Minval input */}
            <input type="range"
              min={minLimit}
              max={maxLimit}
              value={minPrice}
              onChange={handleMinInput}
              onMouseDown={() => setIsMinActive(true)}
              onMouseUp={() => setIsMinActive(false)}
              className="absolute appearance-none w-full h-7 bg-transparent cursor-pointer"
              style={{ zIndex: isMinActive ? 2 : 1 }}
            />

            {/* Maxval input */}
            <input type="range"
              min={minLimit}
              max={maxLimit}
              value={maxPrice}
              onChange={handleMaxInput}
              onMouseDown={() => setIsMaxActive(true)}
              onMouseUp={() => setIsMaxActive(false)}
              className="absolute appearance-none w-full h-7 bg-transparent cursor-pointer"
              style={{ zIndex: isMaxActive ? 2 : 1 }}
            />
          </div>
            
          {/* Display values */}
          <div className="flex justify-between text-xs text-white font-semibold">
            <span>IDR {minPrice}</span>
            <span>IDR {maxPrice}</span>
          </div>
        </div>
        <button type='submit' className='bg-[#ff8906] w-full rounded-md my-3 p-2 text-xs'>Apply filter</button>
      </form>
    </section>
  )
}

export default Filter