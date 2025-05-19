import React, { useEffect, useState } from 'react'
import PaginationOrdersAdmin from './PaginationOrdersAdmin';
import RowListOrdersAdmin from './RowListOrdersAdmin';
import { modalAction } from '../../../redux/slices/modalsAdmin';
import { useDispatch } from "react-redux";

export default function TableOrdersAdmin({data}) {
    const dispatch = useDispatch();


    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);
    const [more, setMore] = useState(0);
    const [checked, setChecked] = useState(1);

    useEffect(() => {
    setStart(page * 5 - 5), setEnd(page * 5);
    }, [page]);

    const products = [];
    const result = data.slice(start, end);
    products.push(...result);

    let pagination = 0;
    pagination += Math.ceil(data.length / 5);


  return (
    <>
    <section className="overflow-x-scroll pt-12 md:pr-7 lg:pr-3 xl:pr-18">
          <table className="table-auto min-w-5xl select-none w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="px-3 py-2 text-sm w-20">
                    <input type="checkbox" name="selectAll" id="selectAll" className="scale-[1.2] cursor-pointer"/>
                </th>
                <th className="px-3 py-2 text-sm">Image</th>
                <th className="px-3 py-2 text-sm">Product Name</th>
                <th className="px-3 py-2 text-sm">Price</th>
                <th className="px-3 py-2 text-sm">Desc</th>
                <th className="px-3 py-2 text-sm">Product Size</th>
                <th className="px-3 py-2 text-sm">Method</th>
                <th className="px-3 py-2 text-sm">Stock</th>
                <th className="px-3 py-2 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <RowListOrdersAdmin id={product.id} description={product.description} method={product.method} price={product.price} productName={product.name} productSize={product.sizes} stock={product.stock} key={index} dispatch={dispatch} modalAction={modalAction}/>
                ))}
            </tbody>
          </table>
        </section>
        <section className='pt-5'>
            <div className="flex gap-2 flex-col justify-center lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 text-center">
                    Show {products.length} product of {data.length} product
                </div>
                <div className="flex gap-5 justify-center lg:col-start-5 lg:col-span-3 lg:flex lg:gap-6 lg:justify-center">
                    {(() => {
                        if (data.length > 25) {
                            return <h1 className={`${more === 0 ? "text-gray-400 cursor-not-allowed" : "text-orange  cursor-pointer"} font-semibold`} onClick={() => {
                                if (more > 0) {
                                    setMore(more - 1);
                                    setPage(page - 1);
                                    setChecked(checked - 1);
                                }
                            }}>Prev</h1>
                        }
                    })()}
                    {(() => {
                        const elPage = []
                        for (let idx = 0; idx < pagination - 6; idx++) {
                            elPage.push(<PaginationOrdersAdmin key={idx + 1 + more} id={idx + 1 + more} setPage={setPage} checked={checked} setChecked={setChecked}/>)
                        }
                        return elPage
                    })()}
                    {(() => {
                        if (data.length > 25) {
                            return <h1 className={`${more < pagination - 5 ? "text-orange cursor-pointer" : "text-gray-400 cursor-not-allowed"} font-semibold`} onClick={() => {
                                if (more < pagination - 5) {
                                    setMore(more + 1)
                                    setPage(page + 1)
                                    setChecked(checked + 1)
                                }
                            }}>Next</h1>
                        }
                    })()}
                </div>
            </div>
        </section>
    </>
  )
}
