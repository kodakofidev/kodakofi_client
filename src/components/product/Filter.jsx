import { useState, useRef } from "react"

function Filter({ name, setName }) {
  const formRef = useRef(null)
  const min = 0
  const max = 100000

  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(100000)
  const [isMinActive, setIsMinActive] = useState(false)
  const [isMaxActive, setIsMaxActive] = useState(false)

  const handleMinInput = (e) => {
    const inputMin = Number(e.target.value)
    if (inputMin >= min && inputMin < maxVal) setMinVal(inputMin)
  }

  const handleMaxInput = (e) => {
    const inputMax = Number(e.target.value)
    if (inputMax <= max && inputMax > minVal) setMaxVal(inputMax)
  }

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset()
      setMinVal(min)
      setMaxVal(max)
    }
  }

  return (
    <section className='hidden md:block lg:block xl:block bg-black rounded-lg my-5 p-5 w-1/3 h-[650px]'>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-white text-sm font-semibold'>Filter</p>
        <p onClick={handleReset} className='text-white text-xs font-semibold cursor-pointer'>Reset filter</p>
      </div>
      <form ref={formRef} className='my-5'>
        <div className='flex flex-col'>
          <label htmlFor="filter" className='text-white text-xs font-semibold'>Search</label>
          <input type="text" 
            name="filter" 
            placeholder='Search Your Product'
            value={name}
            onChange={(e) => setName(e.target.value)}
           className='bg-white rounded-sm text-xs text-black my-1 p-3 w-full' 
          />
        </div>
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
        <div className="w-full my-3">
          <label className="text-xs text-white font-semibold">Price Range</label>
          <div className="relative h-7">
            <div className="absolute top-1/2 w-full h-1 bg-[#c3beb7] rounded-md transform -translate-y-1/2" />
            <div className="absolute h-1 bg-[#ff8906] rounded top-1/2 transform -translate-y-1/2"
              style={{
                left: `${(minVal / max) * 100}%`,
                width: `${((maxVal - minVal) / max) * 100}%`,
              }}
            />

            {/* Minval input */}
            <input type="range"
              min={min}
              max={max}
              value={minVal}
              onChange={handleMinInput}
              onMouseDown={() => setIsMinActive(true)}
              onMouseUp={() => setIsMinActive(false)}
              className="absolute appearance-none w-full h-7 bg-transparent cursor-pointer"
              style={{ zIndex: isMinActive ? 2 : 1 }}
            />

            {/* Maxval input */}
            <input type="range"
              min={min}
              max={max}
              value={maxVal}
              onChange={handleMaxInput}
              onMouseDown={() => setIsMaxActive(true)}
              onMouseUp={() => setIsMaxActive(false)}
              className="absolute appearance-none w-full h-7 bg-transparent cursor-pointer"
              style={{ zIndex: isMaxActive ? 2 : 1 }}
            />
          </div>
            
          {/* Display values */}
          <div className="flex justify-between text-xs text-white font-semibold">
            <span>IDR {minVal}</span>
            <span>IDR {maxVal}</span>
          </div>
        </div>
        <button type='submit' className='bg-[#ff8906] w-full rounded-md my-3 p-2 text-xs'>Apply filter</button>
      </form>
    </section>
  )
}

export default Filter