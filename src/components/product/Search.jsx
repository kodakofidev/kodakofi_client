import filter from '../../assets/icon/Filter.svg'
import search from '../../assets/icon/Search2.svg'

function Search() {
  return (
    <div className='block lg:hidden xl:hidden flex flex-row gap-[10px] justify-between px-4 md:px-12 mt-20'>
        <div className='flex flex-row border border-[#777c82] bg-[#e8e8e8] rounded-sm p-2 w-full'>
            <img src={search} alt="search" />
            <input type="text" name="filter" placeholder='Search Your Product' className='bg-[#e8e8e8] outline-none text-xs text-black w-full mx-2' />
        </div>
        <div className='rounded-md bg-[#ff8906] px-2 pb-2 pt-3'><img src={filter} alt="Filter" /></div>
    </div>
  )
}

export default Search
