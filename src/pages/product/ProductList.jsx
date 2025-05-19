import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import Filter from '../../components/product/Filter'
import Product from '../../components/product/Product'
import Promo from '../../components/product/Promo'
import Tagline from '../../components/product/Tagline'
import Search from '../../components/product/Search'

function ProductList() {
  const URL = import.meta.env.VITE_API_URL
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    options: searchParams.get('options') || '',
    minPrice: Number(searchParams.get('min')),
    maxPrice: Number(searchParams.get('max')),
  })

  const handleFilterApply = (filterValue) => {
    setFilters(filterValue)
    setCurrentPage(1)
  }

  useEffect(() => {
    const query = {
      page: currentPage,
      search: filters.search,
      category: filters.category,
      options: filters.options,
    }

    if (filters.minPrice >= 0 || filters.maxPrice > 0) {
      if (filters.minPrice >= 0) query['min-price'] = filters.minPrice;
      if (filters.maxPrice > 0) query['max-price'] = filters.maxPrice;
    }

    Object.keys(query).forEach((key) => {
      if (!query[key] && query[key] !== 0) delete query[key]
    })
    setSearchParams(query)

    // Fetch data
    async function fetchProducts() {
      setLoading(true)
      setError(null)
      try {
        const queryString = new URLSearchParams(query).toString()
        const res = await fetch(`${URL}/product?${queryString}`)
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        setProducts(data.data.data)
        setTotalPages(data.data.pagination.total_pages || 1)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [currentPage, filters])


  return (
    <div className='h-full'>
      <Tagline />
      <Search filters={filters} onFilterApply={handleFilterApply}/>
      <Promo />
      <section className='px-4 lg:px-8 md:px-12 xl:px-24'>
        <p className='text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>Our <span className='text-[#8E6447]'>Product</span></p>
        <div className='flex flex-row md:gap-[10px] lg:gap-[50px]'>
            <Filter filters={filters} onFilterApply={handleFilterApply} />
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <Product
                products={products}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            )}
        </div>
      </section>
    </div>
  )
}

export default ProductList