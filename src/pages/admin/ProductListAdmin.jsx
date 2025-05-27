import React, { useState, useEffect } from "react";
import HeadProductList from "../../components/Admin/listProducts/HeadProductList";
import TableProducts from "../../components/Admin/listProducts/TableProducts";
import { useSelector, useDispatch } from "react-redux";
import {modalAction} from '../../redux/slices/modalsAdmin'

export default function ProductListAdmin() {
  const dispatch = useDispatch();
  const {addProduct, editProduct} = useSelector((state) => state.modals);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalItems: 0
  });
  
  useEffect(() => {
    fetchProducts(1);
  }, []);
  
  const fetchProducts = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/api/product?page=${page}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const result = await response.json();
      console.log('API response:', result);
      
      if (!result.data || !result.data.data || !Array.isArray(result.data.data)) {
        console.error('API returned invalid data format:', result);
        setProducts([]);
        return;
      }
      
      // Transform backend data to match frontend structure
      const transformedData = result.data.data.map(product => transformProduct(product));
      
      setProducts(transformedData);
      
      // Store pagination info
      if (result.data.pagination) {
        setPagination({
          page: result.data.pagination.page,
          totalPages: result.data.pagination.total_pages,
          totalItems: result.data.pagination.total_items
        });
      }
      
      setError(null);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Helper function to transform product data
  const transformProduct = (product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      // Format image URLs properly
      images: product.images ? product.images.map(img => `http://localhost:8080/public/product-image/${img}`) : [],
      category: product.category_name,
      categoryId: product.category_id,
      // Handle sizes array correctly - API uses 'sizes' property
      sizes: Array.isArray(product.sizes) ? product.sizes.map(s => s.size) : [],
      deliveryMethods: ['Deliver', 'Dine In'], // Default since backend doesn't have this field
      // Calculate total stock from all sizes
      stock: Array.isArray(product.sizes) 
        ? product.sizes.reduce((total, s) => total + s.stock, 0) 
        : 0,
      // Include discount info if available
      discount: product.discount || 0,
      discountName: product.discount_name || ''
    };
  };
  
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchProducts(newPage);
    }
  };
  
  return (
    <>
      <section className="outline-8 outline-[#fff] overscroll-none">
        <HeadProductList onRefresh={() => fetchProducts(pagination.page)} />
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl">Loading products...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500">Error: {error}</p>
            <button 
              className="ml-4 px-4 py-2 bg-orange text-white rounded-md"
              onClick={() => fetchProducts(pagination.page)}
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <TableProducts 
              data={products} 
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </section>
    </>
  );
}