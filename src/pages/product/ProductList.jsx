import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import Filter from '../../components/product/Filter'
import Product from '../../components/product/Product'
import Promo from '../../components/product/Promo'
import Tagline from '../../components/product/Tagline'
import Search from '../../components/product/Search'

function ProductList() {
  const URL = import.meta.env.VITE_API_URL
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [name, setName] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    const pageFromURL = parseInt(searchParams.get('page')) || 1
    const nameFromURL = searchParams.get('name') || ''
    setCurrentPage(pageFromURL)
    setName(nameFromURL)
  }, [])

  useEffect(() => {
    const query = {}
    if (currentPage > 0) query.page = currentPage
    if (name.trim()) query.name = name
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
  }, [currentPage, name])


  return (
    <div className='h-full'>
      <Tagline />
      <Search name={name} setName={setName} />
      <Promo />
      <section className='px-4 lg:px-8 md:px-12 xl:px-24'>
        <p className='text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>Our <span className='text-[#8E6447]'>Product</span></p>
        <div className='flex flex-row md:gap-[10px] lg:gap-[50px]'>
            <Filter name={name} setName={setName} />
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