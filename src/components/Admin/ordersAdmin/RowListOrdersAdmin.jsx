import React from "react";
import Coffee from "../../../assets/iconHistoryOrders/Coffee.jpg";
import Edit from "../../../assets/iconProductListAdmin/Edit2.svg";
import Trash from "../../../assets/iconProductListAdmin/Trash.png";
import View from "../../../assets/iconProductListAdmin/ViewList.svg";
import {useDispatch} from 'react-redux'
import {modalAction} from '../../../redux/slices/modalsAdmin'

export default function RowListOrdersAdmin({orderNumber, date, product, status, totalPrice }) {  
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="flex justify-center items-center">
        <div className="flex justify-center items-center h-22 w-full">
          <input type="checkbox" name="selectProduct" id="selectProduct" className="scale-[1.2] cursor-pointer"/>
        </div>
      </td>
      <td className="min-w-[160px] px-4 text-center text-sm">{orderNumber}</td>
      <td className="min-w-[160px] px-4 text-center text-sm">{date}</td>
      <td className="px-4 min-w-[120px] max-w-[210px] line-clamp-3 text-sm">
        {product} 
      </td>
      <td className="px-4 min-w-[120px] text-center text-sm">
        <div className="flex w-full justify-center">
          <p className={`${status === "Completed" ? "bg-teal-100 text-teal-600" : status === "On Delivery" ? "bg-blue-200 text-blue-600" : status === "Pending" ? "bg-red-100 text-red-600" : status === "Cancelled" ? "bg-gray-100 text-gray-700" : "bg-amber-100 text-orange"} font-bold py-1 px-4 w-max rounded-xl text-center`}>{status}</p>
        </div>
      </td>
      <td className="px-4 min-w-[120px] text-center text-sm">{totalPrice}</td>
      <td className="px-4 min-w-[150px] text-center text-sm">
        <div className="grid grid-cols-3 place-items-center gap-4">
            <div onClick={() => {
              dispatch(modalAction.toggleModalDetailOrder())
            }} className="w-10 h-10 bg-[#FF89061A] overflow-hidden rounded-full flex justify-center items-center p-1 cursor-pointer hover:scale-[1.05] active:scale-[1]">
                <img src={View} alt="icon" className="scale-[1.5]"/>
            </div>
            <div className="w-10 h-10 bg-[#D000001A] overflow-hidden rounded-full flex justify-center items-center p-1 cursor-pointer hover:scale-[1.05] active:scale-[1]">
                <img src={Edit} alt="icon" className="scale-[1.5]"/>
            </div>
            <div className="w-10 h-10 bg-[#D000001A] overflow-hidden rounded-full flex justify-center items-center p-1 cursor-pointer hover:scale-[1.05] active:scale-[1]">
                <img src={Trash} alt="icon" />
            </div>
        </div>
      </td>
    </tr>
  );
}
