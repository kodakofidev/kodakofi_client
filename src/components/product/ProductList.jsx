import Filter from './Filter'
import Product from './Product'
import Promo from './Promo'
import Tagline from './Tagline'
import Search from './Search'

function ProductList() {
  return (
    <div className='h-full'>
      <Tagline />
      <Search />
      <Promo />
      <section className='px-4 lg:px-8 md:px-12 xl:px-24'>
        <p className='text-4xl'>Our <span className='text-[#8E6447]'>Product</span></p>
        <div className='flex flex-row gap-[30px]'>
            <Filter />
            <Product />
        </div>
      </section>
    </div>
  )
}

export default ProductList
