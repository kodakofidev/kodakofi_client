import Card from "../Card"
import next from '../../assets/icon/arrow-right2.svg'

function Product({ products, currentPage, setCurrentPage, totalPages }) {
   console.log("Product data in Card:", products);
  const handlePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="w-full lg:w-2/3 xl:w-3/4">
      <div className='grid grid-cols-2 auto-rows-[550px] auto-cols-[300px]'>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
          ))
        )}
      </div>

      <div className="flex flex-row items-center justify-center w-full h-25 gap-[10px]">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1
          const isActive = page === currentPage
          return (
            <div key={page} onClick={() => handlePage(page)}
              className={`rounded-full text-xs px-[10px] py-[5px] cursor-pointer transition-all duration-200
                ${isActive
                  ? 'bg-[#ff8906] scale-110 font-bold text-black'
                  : 'bg-[#c3beb7] text-black hover:bg-[#ff8906] hover:scale-110'
                }`}
            >
              {page}
            </div>
          )
        })}

        <div onClick={() => {
          if (currentPage < totalPages) setCurrentPage(currentPage + 1)
        }}
          className="rounded-full bg-[#c3beb7] text-[#777c82] text-xs p-[5px] hover:bg-[#ff8906] hover:scale-110 hover:text-black cursor-pointer"
        >
          <img src={next} alt="Next" />
        </div>
      </div>
    </div>
  )
}

export default Product


