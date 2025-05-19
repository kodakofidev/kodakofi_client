import React from 'react'
import Search from "../../../assets/iconProductListAdmin/Search.svg";
import Filter from "../../../assets/iconProductListAdmin/Filter.svg";
import { useDispatch } from 'react-redux';
import { modalAction } from "../../../redux/slices/modalsAdmin";

export default function HeadProductList() {
    const dispatch = useDispatch();
  return (
    <>
        <section className="grid grid-cols-4 gap-y-4 md:grid-cols-7 md:pr-7 lg:pr-3 xl:pr-18">
            <div className="flex flex-col gap-2 justify-center items-start col-span-4 md:row-start-1 md:col-start-1 md:col-span-3">
            <h1 className="text-brown text-2xl font-semibold">Product List</h1>
            <button
                onClick={(() => {
                    dispatch(modalAction.toggleModalAddProduct())
                })}
                type="button"
                className="text-sm font-semibold px-2 py-2 bg-orange rounded-md hover:scale-[1.01] active:scale-[1] cursor-pointer transition"
            >
                + Add Product
            </button>
            </div>
            <div className="flex flex-col gap-2 col-span-4 min-[500px]:col-span-3 md:col-start-4 md:row-start-1 md:justify-end lg:translate-x-12 xl:translate-x-18">
            <p>Search Product</p>
            <div className="relative w-full h-8">
                <input
                type="search"
                name="search"
                id="search"
                placeholder="Enter Product Name"
                className="h-full w-full outline-2 outline-gray-300 rounded-md px-2 focus:outline-orange peer"
                />
                <img
                src={Search}
                alt="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 peer-focus:hidden"
                />
            </div>
            </div>
            <div className="min-[500px]:flex min-[500px]:justify-end min-[500px]:items-end">
            <button
                type="button"
                className="text-sm font-semibold px-2 py-2 bg-orange rounded-md hover:scale-[1.01] active:scale-[1] cursor-pointer transition flex gap-2"
            >
                <img src={Filter} alt="icon" />
                Filter
            </button>
            </div>
        </section>
    </>
  )
}
