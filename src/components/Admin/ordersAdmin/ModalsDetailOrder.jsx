import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {modalAction} from '../../../redux/slices/modalsAdmin'
import Close from "../../../assets/iconCheckoutPage/XCircle.svg"
import Coffee from "../../../assets/iconCheckoutPage/Coffee.jpg"
import Circle from "../../../assets/DetailOrderAdmin/Circle.svg"
import Location from "../../../assets/DetailOrderAdmin/Location.svg"
import PhoneCall from "../../../assets/DetailOrderAdmin/PhoneCall.svg"
import Postcard from "../../../assets/DetailOrderAdmin/Postcard.svg"
import Profile from "../../../assets/DetailOrderAdmin/Profile.svg"
import Truck from "../../../assets/DetailOrderAdmin/Truck.svg"
import CardOrderAdmin from './CardOrderAdmin'


export default function ModalsDetailOrder() {
    const {detailOrder} = useSelector((state) => state.modals);
    const dispatch = useDispatch();

  return (
    <>
        <form className={`h-full overflow-y-hidden p-8 absolute top-16 left-0 right-0 bottom-0 bg-[#fff]  ${detailOrder ? "translate-x-0" : "translate-x-[100%]"} transition duration-300  md:w-1/2 md:left-1/2 md:rigth-0 md:p-4 md:shadow-lg`}>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold'>Order #12354-09893</h1>
                <img src={Close} alt="close" className="cursor-pointer" onClick={(() => {
                    dispatch(modalAction.toggleModalDetailOrder())
                })}/>
            </div>
            <div className='grid grid-cols-1 gap-4 pt-7'>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <img src={Profile} alt="icon" />
                        <p>Full Name</p>
                    </div>
                    <h1>
                        Ghaluh Wizard Anggoro
                    </h1>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <img src={Location} alt="icon" />
                        <p>Address</p>
                    </div>
                    <h1>
                        Griya bandung indah
                    </h1>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <img src={PhoneCall} alt="icon" />
                        <p>Phone</p>
                    </div>
                    <h1>
                       082116304338
                    </h1>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <img src={Postcard} alt="icon" />
                        <p>Payment Method</p>
                    </div>
                    <h1>
                        Cash
                    </h1>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <img src={Truck} alt="icon" />
                        <p>Shipping</p>
                    </div>
                    <h1>
                       Dine In
                    </h1>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <p>Status</p>
                    </div>
                    <div>
                        <select name="Status" id="status" className='bg-gray-200 border py-1 px-2'>
                            <option value="1">Pending</option>
                            <option value="2">Processing</option>
                            <option value="3">On Delivery</option>
                            <option value="4">Completed</option>
                            <option value="5">Cancelled</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <p>Total Transaksi</p>
                    </div>
                    <h1 className='text-orange font-semibold'>
                        Idr 40.000
                    </h1>
                </div>
                <div>
                    <p className='font-semibold text-xl'>Your Order</p>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <CardOrderAdmin product={"Hazelnut Latte"} quantity={2} size={"Regular"} variant={"Ice"} typeOrder={"Dine In"} discountPrice={"20000"} originalPrice={"30000"}/>
                    <CardOrderAdmin product={"Hazelnut Latte"} quantity={2} size={"Regular"} variant={"Ice"} typeOrder={"Dine In"} discountPrice={"20000"} originalPrice={"30000"}/>
                </div>
            </div>
            <button type="submit" className='mt-4 py-1 px-2 bg-orange rounded-md hover:scale-[1.03] active:scale-[1] cursor-pointer w-full'>Update</button>
        </form>
    </>
  )
}
