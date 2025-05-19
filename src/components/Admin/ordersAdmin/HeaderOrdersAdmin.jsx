import React from 'react'
import Search from "../../../assets/iconProductListAdmin/Search.svg";
import Filter from "../../../assets/iconProductListAdmin/Filter.svg";

export default function HeaderOrdersAdmin() {
  return (
    <>
        <section className="grid grid-cols-4 gap-y-4 md:grid-cols-7 min-[500px]:gap-x-2 md:pr-7 lg:pr-3 xl:pr-18">
            <div className="flex flex-col gap-2 justify-center items-start col-span-4 md:row-start-1 md:col-start-1 md:col-span-3">
                <h1 className="text-brown text-2xl font-semibold">Order List</h1>
                <button
                    type="button"
                    className="text-sm font-semibold px-2 py-2 bg-orange rounded-md hover:scale-[1.01] active:scale-[1] cursor-pointer transition"
                >
                    + Add Order
                </button>
            </div>
            <div className="flex flex-col gap-2 col-span-2 min-[500px]:col-span-2 md:col-start-3 md:row-start-1 md:justify-end lg:translate-x-12 xl:translate-x-18">
                <p>Status</p>
                <div className="relative w-full h-8">
                    <select name="status" id="status" className="h-full w-full outline-2 outline-gray-300 rounded-md px-2 focus:outline-orange" >
                        <option value="0" selected>All</option>
                        <option value="1">Pending</option>
                        <option value="2">Processing</option>
                        <option value="3">On Delivery</option>
                        <option value="4">Completed</option>
                        <option value="5">Cancelled</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-2 col-span-2 min-[500px]:col-span-2 md:col-start-5 md:row-start-1 md:justify-end lg:translate-x-12 xl:translate-x-18">
                <p>Search Order</p>
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
