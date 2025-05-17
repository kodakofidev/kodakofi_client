import Filter from '../../components/product/Filter'
import Product from '../../components/product/Product'
import Promo from '../../components/product/Promo'
import Tagline from '../../components/product/Tagline'
import Search from '../../components/product/Search'

function ProductList() {
  return (
    <div className='h-full'>
      <Tagline />
      <Search />
      <Promo />
      <section className='px-4 lg:px-8 md:px-12 xl:px-24'>
        <p className='text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>Our <span className='text-[#8E6447]'>Product</span></p>
        <div className='flex flex-row md:gap-[10px] lg:gap-[100px]'>
            <Filter />
            <Product />
        </div>
      </section>
    </div>
  )
}

export default ProductList
