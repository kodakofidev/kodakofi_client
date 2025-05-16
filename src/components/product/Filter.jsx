

function Filter() {

  return (
    <section className='hidden lg:block xl:block bg-black rounded-lg my-5 p-5 w-1/4 h-[550px]'>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-white text-sm font-semibold'>Filter</p>
        <p className='text-white text-xs font-semibold cursor-pointer'>Reset filter</p>
      </div>
      <form className='my-5'>
        <div className='flex flex-col'>
          <label htmlFor="filter" className='text-white text-xs font-semibold'>Search</label>
          <input type="text" name="filter" placeholder='Search Your Product' className='bg-white rounded-sm text-xs text-black my-1 p-3 w-full' />
        </div>
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
        <button type='submit' className='bg-[#ff8906] w-full rounded-md my-5 p-2 text-xs'>Apply filter</button>
      </form>
    </section>
  )
}

export default Filter
