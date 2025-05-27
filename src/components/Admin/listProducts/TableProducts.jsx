import React from 'react'
import RowListProduct from "../../../components/Admin/listProducts/RowListProduct";
import { useDispatch } from "react-redux";

export default function TableProducts({data, pagination, onPageChange}) {
    const dispatch = useDispatch();

    if (!data || data.length === 0) {
      return (
        <div className="text-center py-8">
          <p>No products found</p>
        </div>
      );
    }

    return (
      <>
        <section className="overflow-x-scroll overflow-y-hidden h-full pt-12 md:pr-7 lg:pr-3 xl:pr-18">
          <table className="table-auto min-w-5xl select-none w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="px-3 py-2 text-sm w-20">
                    <input type="checkbox" name="selectAll" id="selectAll" className="scale-[1.2] cursor-pointer"/>
                </th>
                <th className="px-3 py-2 text-sm">Image</th>
                <th className="px-3 py-2 text-sm">Product Name</th>
                <th className="px-3 py-2 text-sm">Price</th>
                <th className="px-3 py-2 text-sm">Category</th>
                <th className="px-3 py-2 text-sm">Desc</th>
                <th className="px-3 py-2 text-sm">Product Size</th>
                <th className="px-3 py-2 text-sm">Method</th>
                <th className="px-3 py-2 text-sm">Stock</th>
                <th className="px-3 py-2 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
                {data.map((product, index) => (
                    <RowListProduct 
                      key={product.id} 
                      id={product.id} 
                      description={product.description} 
                      method={product.deliveryMethods} 
                      price={product.price} 
                      productName={product.name} 
                      productSize={product.sizes} 
                      stock={product.stock}
                      category={product.category}
                      image={product.images && product.images.length > 0 ? product.images[0] : null}
                    />
                ))}
            </tbody>
          </table>
        </section>
        <section className='pt-5'>
            <div className="flex gap-2 flex-col justify-center lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 text-center">
                    Showing {data.length} products of {pagination.totalItems} products
                </div>
                <div className="flex gap-5 justify-center lg:col-start-4 lg:col-span-3 lg:flex lg:gap-6 lg:justify-center">
                    <button 
                      className={`font-semibold ${pagination.page > 1 ? "text-orange cursor-pointer" : "text-gray-400 cursor-not-allowed"}`}
                      onClick={() => pagination.page > 1 && onPageChange(pagination.page - 1)}
                    >
                      Prev
                    </button>
                    
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                      .filter(page => Math.abs(page - pagination.page) < 3 || page === 1 || page === pagination.totalPages)
                      .map((page, idx, arr) => {
                        // Add ellipsis
                        if (idx > 0 && page > arr[idx - 1] + 1) {
                          return (
                            <React.Fragment key={`ellipsis-${page}`}>
                              <span className="text-gray-400">...</span>
                              <button 
                                key={page}
                                className={`${pagination.page === page ? "text-orange font-bold" : "text-gray-600"} cursor-pointer`}
                                onClick={() => onPageChange(page)}
                              >
                                {page}
                              </button>
                            </React.Fragment>
                          );
                        }
                        return (
                          <button 
                            key={page}
                            className={`${pagination.page === page ? "text-orange font-bold" : "text-gray-600"} cursor-pointer`}
                            onClick={() => onPageChange(page)}
                          >
                            {page}
                          </button>
                        );
                      })}
                    
                    <button 
                      className={`font-semibold ${pagination.page < pagination.totalPages ? "text-orange cursor-pointer" : "text-gray-400 cursor-not-allowed"}`}
                      onClick={() => pagination.page < pagination.totalPages && onPageChange(pagination.page + 1)}
                    >
                      Next
                    </button>
                </div>
            </div>
        </section>
      </>
    )
}
